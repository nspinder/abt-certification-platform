'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [user, setUser] = useState(null)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })
      if (res.ok) {
        const userData = await res.json()
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
      }
    } catch (error) {
      console.error('Sign up failed:', error)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        const userData = await res.json()
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-light to-white">
        <header className="bg-primary text-white shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ABT Certification Platform</h1>
            <button
              onClick={() => {
                setUser(null)
                localStorage.removeItem('user')
              }}
              className="btn btn-outline text-white border-white hover:bg-dark"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Welcome, {(user as any).name}!</h2>
            <p className="text-lg text-gray-600">
              Start learning for ABT1/ABT2 certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-secondary mb-2">0</h3>
              <p className="text-gray-600">Lessons Completed</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-secondary mb-2">0%</h3>
              <p className="text-gray-600">Course Progress</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-secondary mb-2">0</h3>
              <p className="text-gray-600">Current Streak</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-secondary mb-2">0</h3>
              <p className="text-gray-600">Total Points</p>
            </div>
          </div>

          <Link href="/learn">
            <button className="btn btn-primary w-full py-3 text-lg mb-8">
              Start Learning
            </button>
          </Link>

          <h3 className="text-2xl font-bold text-primary mb-6">Course Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Sistema Financeiro Nacional', lessons: 8 },
              { title: 'Sigilo Bancário', lessons: 6 },
              { title: 'Crimes contra o SFN', lessons: 5 },
              { title: 'Operações de Câmbio', lessons: 10 },
              { title: 'Legislação Cambial', lessons: 12 },
              { title: 'Normas Cambiais', lessons: 15 },
              { title: 'Correspondentes Cambiais', lessons: 8 },
              { title: 'Prevenção à Lavagem de Dinheiro', lessons: 14 },
            ].map((module, i) => (
              <Link key={i} href={`/learn?module=${i + 1}`}>
                <div className="lesson-card">
                  <h4 className="font-bold text-lg text-primary mb-2">{module.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{module.lessons} lessons</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">ABT Certification Platform</h1>
          <p className="text-light mt-2">Master the Financial System Regulations</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Prepare for ABT1 & ABT2</h2>
            <p className="text-lg text-gray-700 mb-4">
              Learn about the Brazilian Financial System, foreign exchange operations, and anti-money laundering regulations.
              Get certified with our interactive platform.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-secondary font-bold mr-3">✓</span>
                Interactive lessons with real content
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-secondary font-bold mr-3">✓</span>
                Practice with certification-style questions
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-secondary font-bold mr-3">✓</span>
                Track your progress
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-secondary font-bold mr-3">✓</span>
                Spaced repetition for better retention
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h3>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              )}
              <button type="submit" className="btn btn-primary w-full">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-3">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </p>
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="btn btn-outline w-full"
              >
                {isSignUp ? 'Sign In Instead' : 'Create Account'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
