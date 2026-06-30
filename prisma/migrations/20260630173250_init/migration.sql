-- CreateTable
CREATE TABLE "Superhero" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "realName" TEXT,
    "superPower" TEXT NOT NULL,
    "team" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Superhero_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Superhero_name_key" ON "Superhero"("name");
