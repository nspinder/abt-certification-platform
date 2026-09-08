'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CategoryScore {
  category: string
  attempts: number
  correct: number
  percentage: number
}

interface WeakArea {
  topic: string
  percentage: number
  priority: 'high' | 'medium' | 'low'
}

interface Recommendation {
  title: string
  description: string
  priority: number
  estimatedTime: number
  targetCategory: string
}

export default function AnalyticsPage() {
  const [user, setUser] = useState(null)
  const [performance, setPerformance] = useState({
    totalAttempts: 0,
    correctAnswers: 0,
    overallScore: 0,
    categoryScores: [] as CategoryScore[],
    weakAreas: [] as WeakArea[],
    passEstimate: 0
  })

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      window.location.href = '/'
    } else {
      setUser(JSON.parse(userData))
    }

    // Load performance data from localStorage
    const performanceData = localStorage.getItem('userPerformance')
    if (performanceData) {
      const perf = JSON.parse(performanceData)
      setPerformance({
        totalAttempts: perf.totalAttempts || 0,
        correctAnswers: perf.correctAnswers || 0,
        overallScore: perf.overallScore || 0,
        categoryScores: Object.values(perf.categoryScores || {}) as CategoryScore[],
        weakAreas: perf.weakAreas || [],
        passEstimate: calculatePassEstimate(perf)
      })
    }
  }, [])

  function calculatePassEstimate(perf: any): number {
    if ((perf.totalAttempts || 0) < 10) return -1
    const baseScore = perf.overallScore || 0
    const weakAreaPenalty = (perf.weakAreas || []).filter(
      (a: any) => a.percentage < 50
    ).length * 5
    return Math.max(0, Math.min(100, baseScore - weakAreaPenalty))
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 70) return 'text-blue-600'
    if (percentage >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 border-red-300 text-red-800'
      case 'medium':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800'
      default:
        return 'bg-green-100 border-green-300 text-green-800'
    }
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/learn">
            <h1 className="text-2xl font-bold cursor-pointer">ABT Platform</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/learn" className="btn btn-outline text-white border-white">
              Back to Learn
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('user')
                window.location.href = '/'
              }}
              className="btn btn-outline text-white border-white"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-primary mb-8">📊 Performance Analytics</h2>

        {/* Overall Score */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="text-gray-600 text-sm mb-2">Overall Score</div>
            <div className={`text-4xl font-bold ${getScoreColor(performance.overallScore)} mb-2`}>
              {performance.overallScore.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">
              {performance.correctAnswers} / {performance.totalAttempts} correct
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all"
                style={{ width: `${performance.overallScore}%` }}
              ></div>
            </div>
          </div>

          <div className="card">
            <div className="text-gray-600 text-sm mb-2">Total Attempts</div>
            <div className="text-4xl font-bold text-secondary mb-2">
              {performance.totalAttempts}
            </div>
            <div className="text-sm text-gray-600">questions answered</div>
          </div>

          <div className="card">
            <div className="text-gray-600 text-sm mb-2">Pass Probability</div>
            <div className={`text-4xl font-bold ${
              performance.passEstimate >= 70 ? 'text-green-600' : 'text-red-600'
            } mb-2`}>
              {performance.passEstimate === -1 ? 'N/A' : `${performance.passEstimate.toFixed(0)}%`}
            </div>
            <div className="text-sm text-gray-600">
              {performance.passEstimate === -1
                ? 'Answer 10+ questions'
                : performance.passEstimate >= 70
                  ? 'On track to pass! 🎉'
                  : 'Keep studying'}
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card mb-8">
          <h3 className="text-xl font-bold text-primary mb-6">📈 Performance by Category</h3>
          <div className="space-y-4">
            {performance.categoryScores.length === 0 ? (
              <p className="text-gray-600">No quiz attempts yet. Start with a lesson quiz!</p>
            ) : (
              performance.categoryScores.map((category) => (
                <div key={category.category} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">{category.category}</span>
                    <span className={`font-bold ${getScoreColor(category.percentage)}`}>
                      {category.percentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`rounded-full h-2 transition-all ${
                        category.percentage >= 70 ? 'bg-green-600' : 'bg-yellow-600'
                      }`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {category.correct} / {category.attempts} correct
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Weak Areas */}
        {performance.weakAreas.length > 0 && (
          <div className="card mb-8">
            <h3 className="text-xl font-bold text-primary mb-6">⚠️ Areas to Improve</h3>
            <div className="space-y-3">
              {performance.weakAreas.map((area) => (
                <div key={area.topic} className={`border-l-4 p-4 rounded ${getPriorityColor(area.priority)}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{area.topic}</span>
                    <span className="font-bold">{area.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="text-sm mt-1">
                    {area.priority === 'high'
                      ? '🔴 Critical: Focus on this first'
                      : '🟡 Important: Review soon'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study Recommendations */}
        <div className="card">
          <h3 className="text-xl font-bold text-primary mb-6">💡 Recommended Next Steps</h3>
          <div className="space-y-4">
            {performance.totalAttempts === 0 ? (
              <div className="bg-blue-50 border border-blue-300 rounded p-4">
                <p className="text-blue-800">
                  🎯 <strong>Get Started:</strong> Take the first lesson quiz to build your
                  performance profile. Results will appear here to guide your study plan.
                </p>
              </div>
            ) : performance.passEstimate === -1 ? (
              <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
                <p className="text-yellow-800">
                  📝 <strong>Build More Data:</strong> Complete 10+ quiz questions to get a pass
                  probability estimate and personalized recommendations.
                </p>
              </div>
            ) : performance.overallScore < 70 ? (
              <div className="bg-red-50 border border-red-300 rounded p-4">
                <p className="text-red-800 mb-4">
                  🚀 <strong>Path to Pass (70%):</strong> You're at {performance.overallScore.toFixed(1)}%.
                  Focus on your weak areas to improve faster.
                </p>
                <div className="space-y-2">
                  {performance.weakAreas
                    .filter((a) => a.priority === 'high')
                    .slice(0, 3)
                    .map((area) => (
                      <div key={area.topic} className="flex items-center text-sm">
                        <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        Master <strong className="mx-1">{area.topic}</strong> (currently{' '}
                        {area.percentage.toFixed(0)}%)
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-300 rounded p-4">
                <p className="text-green-800 mb-4">
                  🎉 <strong>You're Passing!</strong> At {performance.overallScore.toFixed(1)}%, you're on
                  track for the ABT exam. Continue reviewing weak areas to achieve 80%+.
                </p>
                {performance.weakAreas.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold">Remaining areas to strengthen:</div>
                    {performance.weakAreas.map((area) => (
                      <div key={area.topic} className="flex items-center text-sm">
                        <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        {area.topic} ({area.percentage.toFixed(0)}%)
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link href="/learn" className="btn btn-primary btn-lg">
            📝 Continue Learning & Practicing
          </Link>
        </div>
      </main>
    </div>
  )
}
