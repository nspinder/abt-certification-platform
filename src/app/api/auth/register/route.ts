import { NextRequest, NextResponse } from 'next/server'
import { initializeDatabase, createUser } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    initializeDatabase()

    const { email, name } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    try {
      const user = createUser(email, name)
      return NextResponse.json(
        { id: user.id, email: user.email, name: user.name },
        { status: 201 }
      )
    } catch (e: any) {
      if (e.message.includes('already exists')) {
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 409 }
        )
      }
      throw e
    }
  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    )
  }
}
