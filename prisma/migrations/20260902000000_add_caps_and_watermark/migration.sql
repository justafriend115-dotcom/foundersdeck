-- AlterTable: add cap-bypass and business plan completion tracking to User
ALTER TABLE "User" ADD COLUMN     "bypassCaps" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "businessPlanCompleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable: add regeneration counter and watermark flag to PitchDeck
ALTER TABLE "PitchDeck" ADD COLUMN     "regenCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "watermarked" BOOLEAN NOT NULL DEFAULT true;
