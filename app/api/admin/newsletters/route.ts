import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { title, fileUrl } = await request.json()

    if (!title || !fileUrl) {
      return NextResponse.json(
        { success: false, error: 'Title and File URL are required' },
        { status: 400 }
      )
    }

    const newsletter = await prisma.newsletter.create({
      data: { title, fileUrl }
    })

    return NextResponse.json({
      success: true,
      message: 'Newsletter created',
      data: newsletter
    })
  } catch (error) {
    console.error('Create newsletter error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required' },
        { status: 400 }
      )
    }

    await prisma.newsletter.delete({
      where: { id }
    })

    return NextResponse.json({
      success: true,
      message: 'Newsletter deleted'
    })
  } catch (error) {
    console.error('Delete newsletter error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
