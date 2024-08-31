import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { movie_id, user_email, username, movie_title, comment } =
      await request.json();

    const createComment = await prisma.comment.create({
      data: { movie_id, user_email, username, movie_title, comment },
    });

    return NextResponse.json({ status: 200, isCreated: true });
  } catch (error: any) {
    console.error('Error post comment:', error);
    return NextResponse.json(
      { status: 500, isCreated: false, error: error.message },
      { status: 500 }
    );
  }
}
