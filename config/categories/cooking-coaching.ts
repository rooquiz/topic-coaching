import type { CategoryFile } from '../schema'

/** niche · 烹饪教练 */
export const cookingCoaching: CategoryFile = {
  category: {
    slug: 'cooking-coaching',
    name: 'Cooking Coach',
    title: 'Cooking Coach Quizzes & Assessments',
    description:
      'Build real cooking skills — technique, food science, and kitchen confidence. Free cooking coaching quizzes and assessments.',
    emoji: '🍳',
    heroCopy:
      'Cook with confidence — start by testing the fundamentals that make everything you make taste better.',
    order: 17,
    parent: 'lifestyle-interests',
    intro: [
      'Cooking coaching is about building real skill in the kitchen rather than memorizing recipes. Once you understand a handful of fundamentals — mise en place, how heat browns and develops flavor, why resting meat matters, and basic food safety — you can improvise, fix a dish that goes sideways, and make everything you cook taste better.',
      'Knowing where your gaps are is the fastest way to improve. A quick knowledge check shows whether you are ready to move past following instructions and start cooking with intuition, and it turns each answer into a tip you can use in your next meal.',
      'Cooking at home also pays off beyond the plate: research links cooking meals at home more often to better diet quality and lower spending compared with frequent takeout and restaurant meals (source: Public Health Nutrition study via Johns Hopkins Bloomberg School of Public Health, https://publichealth.jhu.edu/2014/study-suggests-home-cooking-a-main-ingredient-in-healthier-diet). These free quizzes are an easy, no-pressure way to see how kitchen-smart you already are.',
    ],
    faq: [
      {
        q: 'What does a cooking coach help with?',
        a: 'A cooking coach helps you master core techniques, understand the food science behind why dishes work, build kitchen confidence and speed, and cook without leaning on a recipe for every step — so you can adapt to what you have and what you like.',
      },
      {
        q: 'Do I need to be experienced to take these quizzes?',
        a: 'No. The quizzes work for everyone from beginners to confident home cooks. Each question comes with a short explanation, so you learn something new whether you get it right or wrong.',
      },
      {
        q: 'Are these cooking quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'x8rjzqc6',
      slug: 'cooking-iq-quiz',
      order: 1,
      seo: {
        title: 'Cooking IQ Quiz — Test Your Kitchen Smarts (Free 10-Question Quiz)',
        description:
          'A free 10-question cooking IQ quiz on technique, food science, and kitchen safety. No recipes to memorize — just the fundamentals that make everything you cook taste better, with an explanation for every answer.',
        overview:
          'Think you know your way around a kitchen? This free 10-question quiz tests the fundamentals real cooks rely on — technique, food science, and kitchen safety — and scores your Cooking IQ out of 100. Every answer comes with a short explanation, so you learn something new with each question.',
        whoFor:
          'Home cooks who want to move past following recipes, beginners building confidence, and anyone curious how their kitchen knowledge stacks up.',
        whatYouLearn: [
          'Your Cooking IQ score from Kitchen Novice to Master Chef',
          'Key techniques like mise en place, sautéing, and roux',
          'The food science behind browning, resting meat, and leavening',
          'Essential food-safety temperatures and cooking basics',
        ],
        sampleQuestions: [
          'What does the French kitchen term "mise en place" mean?',
          'The Maillard reaction, which browns and flavors food, happens between amino acids and what?',
          'Why should you let a roast rest before slicing it?',
          'For food safety, cooked chicken should reach an internal temperature of at least what?',
        ],
        howItWorks:
          'You answer 10 multiple-choice questions on techniques, food science, and kitchen safety, each worth 10 points for a Cooking IQ out of 100. Every question includes an explanation so you pick up a usable tip as you go. It takes a few minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Do I need to memorize recipes for this quiz?',
            a: 'No. The Cooking IQ quiz tests fundamentals — technique, food science, and safety — not specific recipes. These are the concepts that make every dish you cook better.',
          },
          {
            q: 'What is a good Cooking IQ score?',
            a: 'Scores map to four levels: Kitchen Novice, Home Cook, Skilled Cook, and Master Chef. A score of 70 or above means you understand both technique and the science behind it well enough to cook without a recipe.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'A few minutes, and it is free with a personalized result and an explanation for every answer — no signup required to start.',
          },
        ],
      },
    },
  ],
}
