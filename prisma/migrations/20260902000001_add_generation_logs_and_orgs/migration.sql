-- Create Organization table
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- Add new fields to User
ALTER TABLE "User"
    ADD COLUMN "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN "suspiciousActivity" BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN "orgId" TEXT;

-- Create GenerationLog table
CREATE TABLE "GenerationLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tool" TEXT NOT NULL,
    "estimatedCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "inputTokens" INTEGER NOT NULL DEFAULT 0,
    "outputTokens" INTEGER NOT NULL DEFAULT 0,
    "refused" BOOLEAN NOT NULL DEFAULT false,
    "refuseReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "GenerationLog_pkey" PRIMARY KEY ("id")
);

-- Index for per-user spend queries
CREATE INDEX "GenerationLog_userId_createdAt_idx" ON "GenerationLog"("userId", "createdAt");

-- Foreign key: GenerationLog → User
ALTER TABLE "GenerationLog" ADD CONSTRAINT "GenerationLog_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Foreign key: User → Organization
ALTER TABLE "User" ADD CONSTRAINT "User_orgId_fkey"
    FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
