/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `averageRating` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `favouriteId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `upadatedAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `_CatagoryToPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_favouriteId_fkey";

-- DropForeignKey
ALTER TABLE "_CatagoryToPost" DROP CONSTRAINT "_CatagoryToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_CatagoryToPost" DROP CONSTRAINT "_CatagoryToPost_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "averageRating",
DROP COLUMN "createdAt",
DROP COLUMN "favouriteId",
DROP COLUMN "upadatedAt";

-- DropTable
DROP TABLE "_CatagoryToPost";
