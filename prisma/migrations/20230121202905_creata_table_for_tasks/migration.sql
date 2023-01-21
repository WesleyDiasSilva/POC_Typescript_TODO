-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
