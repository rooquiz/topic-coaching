import 'server-only'

import { GraphQLClient } from 'graphql-request'
import { unstable_cache } from 'next/cache'

import { env } from './env'

const client = new GraphQLClient(`${env.payloadServerDomain}/api/graphql`, { fetch })

// 查询规范来源见 src/graphql/getPublicFormMeta.graphql。
const GET_PUBLIC_FORM_META = /* GraphQL */ `
  query GetPublicFormMeta($publicToken: String!, $language: String) {
    getPublicForm(publicToken: $publicToken, language: $language) {
      id
      title
      description
      language
      openGraph
      flagImg {
        url
      }
      tenant {
        id
        name
        plan
        link
        logo {
          url
        }
      }
      personalized {
        theme
      }
    }
  }
`

export interface PayloadFormMeta {
  id: string
  title: string | null
  description: string | null
  language: string | null
  openGraph: Record<string, unknown> | null
  flagImg: { url: string | null } | null
  tenant: {
    id: string
    name: string | null
    plan: string | null
    link: string | null
    logo: { url: string | null } | null
  } | null
  personalized: { theme: unknown } | null
}

interface GetPublicFormMetaResponse {
  getPublicForm: PayloadFormMeta | null
}

async function requestFormMeta(publicToken: string, language?: string): Promise<PayloadFormMeta | null> {
  try {
    const data = await client.request<GetPublicFormMetaResponse>(GET_PUBLIC_FORM_META, {
      publicToken,
      language: language ?? null,
    })
    return data.getPublicForm ?? null
  } catch {
    // 网络失败 / 测评已下架（isActive=false 或 isBanned，getPublicForm 返回 null）
    // → 返回 null，落地页回退到本地清单的 seo 文案，构建不会因此中断。
    return null
  }
}

/**
 * 取测评元数据。
 * 用 unstable_cache 包一层，让 GraphQL 的 POST 请求也能享受 ISR 式缓存
 * （Next 默认不缓存 POST fetch）。入参会自动并入缓存键。
 */
export const fetchFormMeta = unstable_cache(requestFormMeta, ['payload-form-meta'], {
  revalidate: 3600,
  tags: ['payload-form-meta'],
})
