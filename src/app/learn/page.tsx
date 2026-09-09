'use client'

import { useState, useEffect } from 'react'
import { lessonContent, quizQuestions } from '@/lib/lessonContent'
import { lessonQuizzes, comprehensiveExam } from '@/lib/quizData'
import Link from 'next/link'

export default function LearnPage() {
  const [user, setUser] = useState(null)
  const [selectedModule, setSelectedModule] = useState(1)
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [view, setView] = useState<'modules' | 'lesson' | 'quiz' | 'finalExam'>('modules')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [quizComplete, setQuizComplete] = useState(false)
  const [score, setScore] = useState(0)
  const [quizType, setQuizType] = useState<'lesson' | 'comprehensive'>('lesson')
  const [showExplanation, setShowExplanation] = useState(false)
  const [explanationRevealed, setExplanationRevealed] = useState<{ [key: number]: boolean }>({})
  const [userPerformance, setUserPerformance] = useState<any>(null)

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
      setUserPerformance(JSON.parse(performanceData))
    }
  }, [])

  const modules = [
    { id: 1, title: 'Sistema Financeiro Nacional' },
    { id: 2, title: 'Sigilo Bancário' },
    { id: 3, title: 'Crimes contra o SFN' },
    { id: 4, title: 'Operações de Câmbio' },
    { id: 5, title: 'Legislação Cambial' },
    { id: 6, title: 'Normas Cambiais' },
    { id: 7, title: 'Correspondentes Cambiais' },
    { id: 8, title: 'Prevenção à Lavagem de Dinheiro' }
  ]

  const lessons = (lessonContent as any)[selectedModule] || { lessons: [] }
  const currentLesson = lessons.lessons?.[selectedLesson]

  // Get quiz questions based on type
  const moduleLessons = quizType === 'lesson'
    ? lessonQuizzes.filter(q => q.moduleId === selectedModule && q.lessonId === selectedLesson)
    : comprehensiveExam

  const currentQuestion = moduleLessons[currentQuestionIndex]

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswers[currentQuestionIndex] === undefined) {
      setSelectedAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: optionIndex
      }))
      setExplanationRevealed(prev => ({
        ...prev,
        [currentQuestionIndex]: true
      }))
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < moduleLessons.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
    } else {
      completeQuiz()
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowExplanation(false)
    }
  }

  const completeQuiz = () => {
    let correctCount = 0
    moduleLessons.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setQuizComplete(true)

    // Track performance
    trackPerformance(correctCount, moduleLessons.length)
  }

  const trackPerformance = (correctCount: number, totalCount: number) => {
    // Load existing performance
    let performance = userPerformance || {
      totalAttempts: 0,
      correctAnswers: 0,
      overallScore: 0,
      categoryScores: {},
      moduleScores: {},
      weakAreas: [],
      lastUpdated: Date.now()
    }

    // Update totals
    performance.totalAttempts += totalCount
    performance.correctAnswers += correctCount
    performance.overallScore = (performance.correctAnswers / performance.totalAttempts) * 100

    // Update category scores
    const category = quizType === 'comprehensive' ? 'All Categories' : `Module ${selectedModule}`
    if (!performance.categoryScores[category]) {
      performance.categoryScores[category] = {
        attempts: 0,
        correct: 0,
        percentage: 0
      }
    }
    performance.categoryScores[category].attempts += totalCount
    performance.categoryScores[category].correct += correctCount
    performance.categoryScores[category].percentage =
      (performance.categoryScores[category].correct / performance.categoryScores[category].attempts) * 100

    // Save to localStorage
    localStorage.setItem('userPerformance', JSON.stringify(performance))
    setUserPerformance(performance)
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">ABT Platform</h1>
          </Link>
          <div className="flex gap-3">
            <Link href="/analytics" className="btn btn-outline text-white border-white">
              📊 Analytics
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
        {view === 'modules' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary">Select a Module</h2>
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setSelectedAnswers({})
                  setExplanationRevealed({})
                  setQuizComplete(false)
                  setScore(0)
                  setQuizType('comprehensive')
                  setView('finalExam')
                }}
                className="btn btn-secondary"
              >
                📝 Practice Exam (100 Questions)
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map(module => (
                <div
                  key={module.id}
                  onClick={() => {
                    setSelectedModule(module.id)
                    setView('lesson')
                    setSelectedLesson(0)
                  }}
                  className="lesson-card cursor-pointer"
                >
                  <h3 className="font-bold text-lg text-primary mb-2">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {((lessonContent as any)[module.id]?.lessons.length) || 0} lessons
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '0%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'lesson' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="card mb-6 sticky top-6">
                <h3 className="font-bold text-lg mb-4 text-primary">
                  {modules.find(m => m.id === selectedModule)?.title}
                </h3>
                <div className="space-y-2">
                  {lessons.lessons.map((lesson: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLesson(index)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedLesson === index
                          ? 'bg-secondary text-white'
                          : 'bg-light text-primary hover:bg-gray-200'
                      }`}
                    >
                      {index + 1}. {lesson.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {currentLesson && (
                <div className="card">
                  <div className="mb-6">
                    <span className="text-sm bg-light text-primary px-3 py-1 rounded-full">
                      {currentLesson.difficulty}
                    </span>
                    <h2 className="text-3xl font-bold text-primary mt-3 mb-2">
                      {currentLesson.title}
                    </h2>
                  </div>

                  <div className="prose max-w-none mb-8 whitespace-pre-line text-gray-700">
                    {currentLesson.content}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setView('modules')}
                      className="btn btn-outline"
                    >
                      Back to Modules
                    </button>
                    <button
                      onClick={() => {
                        setCurrentQuestionIndex(0)
                        setSelectedAnswers({})
                        setExplanationRevealed({})
                        setQuizComplete(false)
                        setScore(0)
                        setQuizType('lesson')
                        setView('quiz')
                      }}
                      className="btn btn-primary ml-auto"
                    >
                      📝 Lesson Quiz
                    </button>
                    {selectedLesson < lessons.lessons.length - 1 && (
                      <button
                        onClick={() => setSelectedLesson(selectedLesson + 1)}
                        className="btn btn-primary ml-auto"
                      >
                        Next Lesson
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {view === 'finalExam' && (
          <div className="max-w-2xl mx-auto">
            <div className="card">
              {quizComplete ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Exam Complete!</h2>
                  <p className="text-gray-600 mb-2">Comprehensive ABT Exam</p>
                  <div className="text-5xl font-bold text-secondary mb-4">
                    {score} / 100
                  </div>
                  <p className="text-xl text-gray-600 mb-8">
                    {Math.round((score / 100) * 100)}% Correct
                  </p>
                  {score >= 70 ? (
                    <div className="bg-green-100 border border-green-400 rounded p-4 mb-8">
                      <p className="text-green-800 font-bold">✓ Passed! Score 70% or higher</p>
                    </div>
                  ) : (
                    <div className="bg-yellow-100 border border-yellow-400 rounded p-4 mb-8">
                      <p className="text-yellow-800 font-bold">Keep studying! Aim for 70%+</p>
                    </div>
                  )}
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setCurrentQuestionIndex(0)
                        setSelectedAnswers({})
                        setExplanationRevealed({})
                        setQuizComplete(false)
                        setScore(0)
                      }}
                      className="btn btn-primary w-full"
                    >
                      Retake Exam
                    </button>
                    <button
                      onClick={() => setView('modules')}
                      className="btn btn-secondary w-full"
                    >
                      Back to Modules
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Question {currentQuestionIndex + 1} of 100
                      </span>
                      <span className="text-sm text-secondary font-bold">
                        {Math.round(((currentQuestionIndex + 1) / 100) * 100)}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestionIndex + 1) / 100) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {currentQuestion && (
                    <>
                      <h3 className="text-xl font-bold text-primary mb-2">{currentQuestion.question}</h3>
                      {(currentQuestion as any).category && <p className="text-sm text-gray-500 mb-6">Category: {(currentQuestion as any).category}</p>}

                      <div className="space-y-3 mb-8">
                        {currentQuestion.options.map((option, index) => {
                          const isSelected = selectedAnswers[currentQuestionIndex] === index
                          const isCorrect = index === currentQuestion.correctAnswer
                          const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined

                          return (
                            <button
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              disabled={isAnswered}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                                isAnswered ? 'cursor-default' : 'cursor-pointer'
                              } ${
                                isAnswered && isCorrect ? 'border-green-500 bg-green-50' :
                                isAnswered && isSelected && !isCorrect ? 'border-red-500 bg-red-50' :
                                isSelected ? 'border-secondary bg-light' :
                                'border-gray-300 hover:border-secondary'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div
                                    className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                                      isSelected
                                        ? isCorrect ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500'
                                        : isAnswered && isCorrect ? 'bg-green-500 border-green-500' : 'border-gray-300'
                                    }`}
                                  >
                                    {isAnswered && isCorrect && <span className="text-white text-sm">✓</span>}
                                    {isAnswered && isSelected && !isCorrect && <span className="text-white text-sm">✗</span>}
                                  </div>
                                  {option}
                                </div>
                                {isAnswered && isCorrect && <span className="text-green-600 font-bold">Correto</span>}
                                {isAnswered && isSelected && !isCorrect && <span className="text-red-600 font-bold">Incorreto</span>}
                              </div>
                            </button>
                          )
                        })}
                      </div>

                      {explanationRevealed[currentQuestionIndex] && currentQuestion.explanation && (
                        <div className={`mb-8 p-4 rounded-lg border-l-4 ${
                          selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
                            ? 'bg-green-50 border-green-500'
                            : 'bg-blue-50 border-blue-500'
                        }`}>
                          <h4 className="font-bold text-sm mb-2">📚 Explicação:</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            {typeof (currentQuestion as any).explanation === 'string'
                              ? (currentQuestion as any).explanation
                              : (currentQuestion as any).explanation?.correct}
                          </p>
                          {(currentQuestion as any).regulatoryReference && (
                            <p className="text-xs text-gray-600 font-semibold">
                              📋 Referência: {(currentQuestion as any).regulatoryReference}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="flex gap-4">
                        <button
                          onClick={handlePreviousQuestion}
                          disabled={currentQuestionIndex === 0}
                          className="btn btn-outline disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <button
                          onClick={handleNextQuestion}
                          className="btn btn-primary ml-auto"
                        >
                          {currentQuestionIndex === 99 ? 'Finish Exam' : 'Next'}
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {view === 'quiz' && (
          <div className="max-w-2xl mx-auto">
            <div className="card">
              {quizComplete ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Quiz Complete!</h2>
                  <div className="text-5xl font-bold text-secondary mb-4">
                    {score} / {moduleLessons.length}
                  </div>
                  <p className="text-xl text-gray-600 mb-8">
                    {Math.round((score / moduleLessons.length) * 100)}% Correct
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setCurrentQuestionIndex(0)
                        setSelectedAnswers({})
                        setQuizComplete(false)
                        setScore(0)
                      }}
                      className="btn btn-primary w-full"
                    >
                      Retake Quiz
                    </button>
                    <button
                      onClick={() => setView('modules')}
                      className="btn btn-secondary w-full"
                    >
                      Back to Modules
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Question {currentQuestionIndex + 1} of {moduleLessons.length}
                      </span>
                      <span className="text-sm text-secondary font-bold">
                        {Math.round(((currentQuestionIndex + 1) / moduleLessons.length) * 100)}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestionIndex + 1) / moduleLessons.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {currentQuestion && (
                    <>
                      <h3 className="text-xl font-bold text-primary mb-6">{currentQuestion.question}</h3>

                      <div className="space-y-3 mb-8">
                        {currentQuestion.options.map((option, index) => {
                          const isSelected = selectedAnswers[currentQuestionIndex] === index
                          const isCorrect = index === currentQuestion.correctAnswer
                          const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined

                          return (
                            <button
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              disabled={isAnswered}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                                isAnswered ? 'cursor-default' : 'cursor-pointer'
                              } ${
                                isAnswered && isCorrect ? 'border-green-500 bg-green-50' :
                                isAnswered && isSelected && !isCorrect ? 'border-red-500 bg-red-50' :
                                isSelected ? 'border-secondary bg-light' :
                                'border-gray-300 hover:border-secondary'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div
                                    className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                                      isSelected
                                        ? isCorrect ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500'
                                        : isAnswered && isCorrect ? 'bg-green-500 border-green-500' : 'border-gray-300'
                                    }`}
                                  >
                                    {isAnswered && isCorrect && <span className="text-white text-sm">✓</span>}
                                    {isAnswered && isSelected && !isCorrect && <span className="text-white text-sm">✗</span>}
                                  </div>
                                  {option}
                                </div>
                                {isAnswered && isCorrect && <span className="text-green-600 font-bold">Correto</span>}
                                {isAnswered && isSelected && !isCorrect && <span className="text-red-600 font-bold">Incorreto</span>}
                              </div>
                            </button>
                          )
                        })}
                      </div>

                      {explanationRevealed[currentQuestionIndex] && currentQuestion.explanation && (
                        <div className={`mb-8 p-4 rounded-lg border-l-4 ${
                          selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
                            ? 'bg-green-50 border-green-500'
                            : 'bg-blue-50 border-blue-500'
                        }`}>
                          <h4 className="font-bold text-sm mb-2">📚 Explicação:</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            {typeof (currentQuestion as any).explanation === 'string'
                              ? (currentQuestion as any).explanation
                              : (currentQuestion as any).explanation?.correct}
                          </p>
                          {(currentQuestion as any).regulatoryReference && (
                            <p className="text-xs text-gray-600 font-semibold">
                              📋 Referência: {(currentQuestion as any).regulatoryReference}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="flex gap-4">
                        <button
                          onClick={handlePreviousQuestion}
                          disabled={currentQuestionIndex === 0}
                          className="btn btn-outline disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <button
                          onClick={handleNextQuestion}
                          className="btn btn-primary ml-auto"
                        >
                          {currentQuestionIndex === moduleLessons.length - 1 ? 'Finish' : 'Next'}
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
