import { NextRequest, NextResponse } from 'next/server'
import { getModules } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const modules = getModules()
    return NextResponse.json(modules, { status: 200 })
  } catch (error) {
    console.error('Get modules error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch modules' },
      { status: 500 }
    )
  }
}
