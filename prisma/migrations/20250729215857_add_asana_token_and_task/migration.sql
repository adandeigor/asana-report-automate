-- AlterTable
ALTER TABLE "User" ADD COLUMN     "asanaToken" TEXT;

-- CreateTable
CREATE TABLE "AsanaTask" (
    "id" TEXT NOT NULL,
    "taskGid" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AsanaTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AsanaTask_taskGid_key" ON "AsanaTask"("taskGid");

-- AddForeignKey
ALTER TABLE "AsanaTask" ADD CONSTRAINT "AsanaTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
