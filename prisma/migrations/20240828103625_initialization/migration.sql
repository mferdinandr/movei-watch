-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_movie_id_key" ON "Collection"("user_email", "movie_id");
