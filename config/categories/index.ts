import type { CategoryFile } from '../schema'

// Hubs（顶层支柱页）
import { lifeMindsetRelationships } from './life-mindset-relationships'
import { careerBusinessLeadership } from './career-business-leadership'
import { healthBodyFitness } from './health-body-fitness'
import { sportsAthletics } from './sports-athletics'
import { learningEducation } from './learning-education'
import { performanceCreativity } from './performance-creativity'
import { lifestyleInterests } from './lifestyle-interests'
import { specializedSkills } from './specialized-skills'
// Niches（子分类页）
import { lifeCoaching } from './life-coaching'
import { relationshipCoaching } from './relationship-coaching'
import { stressManagementCoaching } from './stress-management-coaching'
import { personalDevelopmentCoaching } from './personal-development-coaching'
import { mindsetCoaching } from './mindset-coaching'
import { happinessCoaching } from './happiness-coaching'
import { emotionalIntelligenceCoaching } from './emotional-intelligence-coaching'
import { familyCoaching } from './family-coaching'
import { parentingCoaching } from './parenting-coaching'
import { childDevelopmentCoaching } from './child-development-coaching'
import { careerCoaching } from './career-coaching'
import { businessCoaching } from './business-coaching'
import { leadershipCoaching } from './leadership-coaching'
import { jobSearchCoaching } from './job-search-coaching'
import { executiveCoaching } from './executive-coaching'
import { entrepreneurCoaching } from './entrepreneur-coaching'
import { corporateCoaching } from './corporate-coaching'
import { salesCoaching } from './sales-coaching'
import { communicationCoaching } from './communication-coaching'
import { negotiationCoaching } from './negotiation-coaching'
import { publicSpeakingCoaching } from './public-speaking-coaching'
import { teamCoaching } from './team-coaching'
import { organizationDevelopmentCoaching } from './organization-development-coaching'
import { healthWellnessCoaching } from './health-wellness-coaching'
import { fitnessCoaching } from './fitness-coaching'
import { strengthConditioningCoaching } from './strength-conditioning-coaching'
import { sportsPerformanceCoaching } from './sports-performance-coaching'
import { functionalTrainingCoaching } from './functional-training-coaching'
import { postureCoaching } from './posture-coaching'
import { stretchingCoaching } from './stretching-coaching'
import { yogaCoaching } from './yoga-coaching'
import { pilatesCoaching } from './pilates-coaching'
import { meditationCoaching } from './meditation-coaching'
import { breathworkCoaching } from './breathwork-coaching'
import { nutritionCoaching } from './nutrition-coaching'
import { sleepCoaching } from './sleep-coaching'
import { rehabilitationCoaching } from './rehabilitation-coaching'
import { seniorFitnessCoaching } from './senior-fitness-coaching'
import { soccerCoaching } from './soccer-coaching'
import { basketballCoaching } from './basketball-coaching'
import { tennisCoaching } from './tennis-coaching'
import { badmintonCoaching } from './badminton-coaching'
import { swimmingCoaching } from './swimming-coaching'
import { runningCoaching } from './running-coaching'
import { golfCoaching } from './golf-coaching'
import { boxingCoaching } from './boxing-coaching'
import { martialArtsCoaching } from './martial-arts-coaching'
import { skiCoaching } from './ski-coaching'
import { danceCoaching } from './dance-coaching'
import { esportsCoaching } from './esports-coaching'
import { racingCoaching } from './racing-coaching'
import { learningCoaching } from './learning-coaching'
import { academicCoaching } from './academic-coaching'
import { examCoaching } from './exam-coaching'
import { languageCoaching } from './language-coaching'
import { pronunciationCoaching } from './pronunciation-coaching'
import { memoryCoaching } from './memory-coaching'
import { readingCoaching } from './reading-coaching'
import { writingCoaching } from './writing-coaching'
import { musicCoaching } from './music-coaching'
import { artCoaching } from './art-coaching'
import { actingCoaching } from './acting-coaching'
import { voiceCoaching } from './voice-coaching'
import { vocalCoaching } from './vocal-coaching'
import { cameraCoaching } from './camera-coaching'
import { modelCoaching } from './model-coaching'
import { creativityCoaching } from './creativity-coaching'
import { contentCreatorCoaching } from './content-creator-coaching'
import { travelCoaching } from './travel-coaching'
import { financialCoaching } from './financial-coaching'
import { investmentCoaching } from './investment-coaching'
import { lifeOrganizationCoaching } from './life-organization-coaching'
import { imageCoaching } from './image-coaching'
import { etiquetteCoaching } from './etiquette-coaching'
import { cookingCoaching } from './cooking-coaching'
import { petTrainingCoaching } from './pet-training-coaching'
import { militaryCoaching } from './military-coaching'
import { fireTrainingCoaching } from './fire-training-coaching'
import { safetyCoaching } from './safety-coaching'
import { drivingCoaching } from './driving-coaching'
import { flightCoaching } from './flight-coaching'
import { divingCoaching } from './diving-coaching'
import { outdoorAdventureCoaching } from './outdoor-adventure-coaching'
import { survivalCoaching } from './survival-coaching'

/**
 * 全部分类文件。新增一个分类：
 *   1. 在本目录建 <slug>.ts（导出一个 CategoryFile）
 *   2. 在此 import 并加进数组（Hub 在前，niche 按所属 Hub 分组）
 * 顺序不影响展示（展示按 category.order 排 + draft 过滤）。
 */
export const categoryFiles: CategoryFile[] = [
  // ---- Hubs ----
  lifeMindsetRelationships,
  careerBusinessLeadership,
  healthBodyFitness,
  sportsAthletics,
  learningEducation,
  performanceCreativity,
  lifestyleInterests,
  specializedSkills,
  // ---- Niches ----
  // life-mindset-relationships
  lifeCoaching,
  relationshipCoaching,
  stressManagementCoaching,
  personalDevelopmentCoaching,
  mindsetCoaching,
  happinessCoaching,
  emotionalIntelligenceCoaching,
  familyCoaching,
  parentingCoaching,
  childDevelopmentCoaching,
  // career-business-leadership
  careerCoaching,
  businessCoaching,
  leadershipCoaching,
  jobSearchCoaching,
  executiveCoaching,
  entrepreneurCoaching,
  corporateCoaching,
  salesCoaching,
  communicationCoaching,
  negotiationCoaching,
  publicSpeakingCoaching,
  teamCoaching,
  organizationDevelopmentCoaching,
  // health-body-fitness
  healthWellnessCoaching,
  fitnessCoaching,
  strengthConditioningCoaching,
  sportsPerformanceCoaching,
  functionalTrainingCoaching,
  postureCoaching,
  stretchingCoaching,
  yogaCoaching,
  pilatesCoaching,
  meditationCoaching,
  breathworkCoaching,
  nutritionCoaching,
  sleepCoaching,
  rehabilitationCoaching,
  seniorFitnessCoaching,
  // sports-athletics
  soccerCoaching,
  basketballCoaching,
  tennisCoaching,
  badmintonCoaching,
  swimmingCoaching,
  runningCoaching,
  golfCoaching,
  boxingCoaching,
  martialArtsCoaching,
  skiCoaching,
  danceCoaching,
  esportsCoaching,
  racingCoaching,
  // learning-education
  learningCoaching,
  academicCoaching,
  examCoaching,
  languageCoaching,
  pronunciationCoaching,
  memoryCoaching,
  readingCoaching,
  writingCoaching,
  musicCoaching,
  artCoaching,
  // performance-creativity
  actingCoaching,
  voiceCoaching,
  vocalCoaching,
  cameraCoaching,
  modelCoaching,
  creativityCoaching,
  contentCreatorCoaching,
  // lifestyle-interests
  travelCoaching,
  financialCoaching,
  investmentCoaching,
  lifeOrganizationCoaching,
  imageCoaching,
  etiquetteCoaching,
  cookingCoaching,
  petTrainingCoaching,
  // specialized-skills
  militaryCoaching,
  fireTrainingCoaching,
  safetyCoaching,
  drivingCoaching,
  flightCoaching,
  divingCoaching,
  outdoorAdventureCoaching,
  survivalCoaching,
]
