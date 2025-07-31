-- AlterTable
ALTER TABLE "User" ADD COLUMN     "asanaRefreshToken" TEXT,
ADD COLUMN     "asanaTokenExpiresAt" TIMESTAMP(3);
