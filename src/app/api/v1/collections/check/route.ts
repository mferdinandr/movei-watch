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

    const existingCollection = await prisma.collection.findFirst({
      where: { movie_id, user_email },
    });

    if (existingCollection) {
      return NextResponse.json({ isInCollection: true });
    } else {
      return NextResponse.json({ isInCollection: false });
    }
  } catch (error) {
    console.error('Error checking collection:', error);
    return NextResponse.json(
      { status: 500, isInCollection: false, error: error.message },
      { status: 500 }
    );
  }
}
