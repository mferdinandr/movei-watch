/*
  Warnings:

  - Added the required column `movie_title` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poster_path` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "movie_title" TEXT NOT NULL,
ADD COLUMN     "poster_path" TEXT NOT NULL;
