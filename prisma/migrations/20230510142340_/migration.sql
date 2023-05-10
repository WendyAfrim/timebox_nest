/*
  Warnings:

  - You are about to drop the column `created_at` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Timebox` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Timeslot` table. All the data in the column will be lost.
  - You are about to drop the column `start_at` on the `Timeslot` table. All the data in the column will be lost.
  - Added the required column `startAt` to the `Timeslot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Timebox" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Timeslot" DROP COLUMN "created_at",
DROP COLUMN "start_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL;
