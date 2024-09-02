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

export async function GET(request: Request) {
  const url = new URL(request.url);
  const movie_id = url.searchParams.get('movie_id');

  if (movie_id) {
    const comments = await prisma.comment.findMany({
      where: { movie_id: parseInt(movie_id, 10) },
    });

    return NextResponse.json(comments);
  }
  if (movie_id == undefined) {
    return;
  }
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const comment_id = url.searchParams.get('id');

  if (comment_id) {
    const comment = await prisma.comment.delete({
      where: { id: Number(comment_id) },
    });
    return NextResponse.json({ status: 200, isDeleted: true });
  }
}
