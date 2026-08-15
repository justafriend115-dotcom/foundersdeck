-- AlterTable
ALTER TABLE "AcademyProgress" ADD COLUMN     "completedLessons" TEXT NOT NULL DEFAULT '[]',
ADD COLUMN     "examLockedUntil" TIMESTAMP(3),
ADD COLUMN     "examPassed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "examScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "quizLockedUntil" TIMESTAMP(3);
