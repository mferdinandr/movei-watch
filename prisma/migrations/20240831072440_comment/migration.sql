-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "user_email" TEXT NOT NULL,
    "movie_title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
