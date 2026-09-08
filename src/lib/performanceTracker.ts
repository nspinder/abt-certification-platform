// Performance Tracking System
// Tracks user quiz performance, identifies weak areas, and provides recommendations

export interface QuizAttempt {
  userId: string
  questionId: number
  moduleId: number
  category: string
  correct: boolean
  timeSpent: number
  timestamp: number
}

export interface UserPerformance {
  userId: string
  totalAttempts: number
  correctAnswers: number
  overallScore: number // percentage
  categoryScores: { [category: string]: CategoryPerformance }
  moduleScores: { [moduleId: number]: ModulePerformance }
  weakAreas: WeakArea[]
  lastUpdated: number
}

export interface CategoryPerformance {
  category: string
  attempts: number
  correct: number
  percentage: number
  trend: 'improving' | 'stable' | 'declining'
}

export interface ModulePerformance {
  moduleId: number
  moduleName: string
  attempts: number
  correct: number
  percentage: number
  lessonsScores: { [lessonId: number]: number }
}

export interface WeakArea {
  topic: string
  moduleId: number
  category: string
  percentage: number
  priority: 'high' | 'medium' | 'low'
  recommendedLessons: string[]
}

export interface StudyRecommendation {
  title: string
  description: string
  priority: number // 1-10
  estimatedTime: number // minutes
  targetCategory: string
  linkedQuestions: number[]
}

// Initialize or get user performance
export function initializeUserPerformance(userId: string): UserPerformance {
  return {
    userId,
    totalAttempts: 0,
    correctAnswers: 0,
    overallScore: 0,
    categoryScores: {},
    moduleScores: {},
    weakAreas: [],
    lastUpdated: Date.now()
  }
}

// Record a quiz attempt
export function recordQuizAttempt(
  performance: UserPerformance,
  attempt: QuizAttempt
): UserPerformance {
  const updated = { ...performance }

  // Update totals
  updated.totalAttempts += 1
  if (attempt.correct) {
    updated.correctAnswers += 1
  }
  updated.overallScore = (updated.correctAnswers / updated.totalAttempts) * 100

  // Update category scores
  if (!updated.categoryScores[attempt.category]) {
    updated.categoryScores[attempt.category] = {
      category: attempt.category,
      attempts: 0,
      correct: 0,
      percentage: 0,
      trend: 'stable'
    }
  }

  const categoryScore = updated.categoryScores[attempt.category]
  categoryScore.attempts += 1
  if (attempt.correct) categoryScore.correct += 1
  categoryScore.percentage = (categoryScore.correct / categoryScore.attempts) * 100

  // Update module scores
  if (!updated.moduleScores[attempt.moduleId]) {
    updated.moduleScores[attempt.moduleId] = {
      moduleId: attempt.moduleId,
      moduleName: getModuleName(attempt.moduleId),
      attempts: 0,
      correct: 0,
      percentage: 0,
      lessonsScores: {}
    }
  }

  const moduleScore = updated.moduleScores[attempt.moduleId]
  moduleScore.attempts += 1
  if (attempt.correct) moduleScore.correct += 1
  moduleScore.percentage = (moduleScore.correct / moduleScore.attempts) * 100

  updated.lastUpdated = Date.now()
  return updated
}

// Identify weak areas
export function identifyWeakAreas(performance: UserPerformance): WeakArea[] {
  const weakAreas: WeakArea[] = []

  Object.entries(performance.categoryScores).forEach(([category, score]) => {
    if (score.attempts >= 3) { // Only consider with enough attempts
      if (score.percentage < 70) {
        weakAreas.push({
          topic: category,
          moduleId: getModuleIdByCategory(category),
          category,
          percentage: score.percentage,
          priority: score.percentage < 50 ? 'high' : 'medium',
          recommendedLessons: getRecommendedLessons(category)
        })
      }
    }
  })

  return weakAreas.sort((a, b) => a.percentage - b.percentage)
}

// Generate study recommendations
export function generateRecommendations(performance: UserPerformance): StudyRecommendation[] {
  const recommendations: StudyRecommendation[] = []
  const weakAreas = identifyWeakAreas(performance)

  weakAreas.forEach((area) => {
    if (area.priority === 'high') {
      recommendations.push({
        title: `Master ${area.topic}`,
        description: `Your score in ${area.topic} is ${area.percentage.toFixed(1)}%. Focus on reviewing the core concepts and taking targeted quizzes.`,
        priority: 10,
        estimatedTime: 45,
        targetCategory: area.category,
        linkedQuestions: [] // Would be populated from quiz data
      })
    } else if (area.priority === 'medium') {
      recommendations.push({
        title: `Strengthen ${area.topic}`,
        description: `Your score in ${area.topic} is ${area.percentage.toFixed(1)}%. Review the lessons and practice more questions to reach 80%+.`,
        priority: 7,
        estimatedTime: 30,
        targetCategory: area.category,
        linkedQuestions: []
      })
    }
  })

  // Add passing-focused recommendation
  if (performance.overallScore < 70) {
    recommendations.push({
      title: 'Path to 70% Pass',
      description: `You're currently at ${performance.overallScore.toFixed(1)}%. Focus on high-priority weak areas to reach the passing score.`,
      priority: 9,
      estimatedTime: 120,
      targetCategory: 'All',
      linkedQuestions: []
    })
  } else if (performance.overallScore < 80) {
    recommendations.push({
      title: 'Achieve Excellence (80%+)',
      description: `You're at ${performance.overallScore.toFixed(1)}%. Master the remaining weak areas to exceed the passing score.`,
      priority: 6,
      estimatedTime: 90,
      targetCategory: 'All',
      linkedQuestions: []
    })
  }

  return recommendations.sort((a, b) => b.priority - a.priority)
}

// Calculate estimated pass probability
export function estimatePassProbability(performance: UserPerformance): number {
  if (performance.totalAttempts < 10) {
    return -1 // Not enough data
  }

  let probability = performance.overallScore

  // Adjust based on consistency
  const weakAreas = identifyWeakAreas(performance)
  const weakAreaPenalty = weakAreas.filter(a => a.percentage < 50).length * 5
  probability = Math.max(0, probability - weakAreaPenalty)

  return Math.min(100, probability)
}

// Helper functions
function getModuleName(moduleId: number): string {
  const names: { [key: number]: string } = {
    1: 'Sistema Financeiro Nacional',
    2: 'Sigilo Bancário',
    3: 'Crimes contra o SFN',
    4: 'Operações de Câmbio',
    5: 'Legislação Cambial',
    6: 'Normas Cambiais',
    7: 'Correspondentes Cambiais',
    8: 'Prevenção à Lavagem de Dinheiro'
  }
  return names[moduleId] || 'Unknown'
}

function getModuleIdByCategory(category: string): number {
  // Map categories back to module IDs
  const categoryToModule: { [key: string]: number } = {
    'Sistema Financeiro Nacional': 1,
    'Sigilo Bancário': 2,
    'Crimes contra o SFN': 3,
    'Operações de Câmbio': 4,
    'Legislação Cambial': 5,
    'Normas Cambiais': 6,
    'Correspondentes Cambiais': 7,
    'Prevenção à Lavagem de Dinheiro': 8
  }
  return categoryToModule[category] || 1
}

function getRecommendedLessons(category: string): string[] {
  const lessonMap: { [key: string]: string[] } = {
    'Sistema Financeiro Nacional': ['Introdução ao SFN', 'Órgãos Normativos', 'Banco Central'],
    'Sigilo Bancário': ['Lei Complementar 105/2001', 'Quebra Judicial'],
    'Crimes contra o SFN': ['Lei 7.492/1986', 'Responsabilidade Penal'],
    'Operações de Câmbio': ['Lei 14.286/2021', 'Operações Práticas', 'Conformidade'],
    'Legislação Cambial': ['Lei 4.595/1964', 'Política Cambial'],
    'Normas Cambiais': ['Resoluções CMN', 'Compliance'],
    'Correspondentes Cambiais': ['CMN 4.935/2021', 'Supervisão'],
    'Prevenção à Lavagem de Dinheiro': ['Lei 9.613/1998', 'Implementação Prática']
  }
  return lessonMap[category] || []
}

// Calculate category trend
export function calculateTrend(
  previousPercentage: number,
  currentPercentage: number
): 'improving' | 'stable' | 'declining' {
  const diff = currentPercentage - previousPercentage
  if (diff > 5) return 'improving'
  if (diff < -5) return 'declining'
  return 'stable'
}
