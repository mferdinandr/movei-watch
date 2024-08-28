import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { movie_id, user_email } = await request.json();

    if (!movie_id || !user_email) {
      return NextResponse.json(
        { status: 400, message: 'Movie ID and User Email are required.' },
        { status: 400 }
      );
    }

    const createCollection = await prisma.collection.create({
      data: { movie_id, user_email },
    });

    return NextResponse.json({ status: 200, isCreated: true });
  } catch (error) {
    console.error('Error creating collection:', error);
    return NextResponse.json(
      { status: 500, isCreated: false, error: error.message },
      { status: 500 }
    );
  }
}
