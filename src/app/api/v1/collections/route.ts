import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { movie_id, user_email, poster_path, movie_title } =
      await request.json();

    if (!movie_id || !user_email || !movie_title) {
      return NextResponse.json(
        {
          status: 400,
          message: 'Movie ID, User Email, and Movie Title are required.',
        },
        { status: 400 }
      );
    }

    const createCollection = await prisma.collection.create({
      data: { movie_id, user_email, poster_path, movie_title },
    });

    return NextResponse.json({ status: 200, isCreated: true });
  } catch (error: any) {
    console.error('Error creating collection:', error);
    return NextResponse.json(
      { status: 500, isCreated: false, error: error.message },
      { status: 500 }
    );
  }
}
