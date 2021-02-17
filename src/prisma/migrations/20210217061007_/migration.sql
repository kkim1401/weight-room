-- CreateTable
CREATE TABLE "Exercise" (
    "category" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "max" INTEGER,
    "name" TEXT NOT NULL,
    "primaryMuscle" TEXT,
    "secondaryMuscle" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Set" (
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exerciseId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "notes" TEXT,
    "percentage" DECIMAL(65,30),
    "reps" INTEGER NOT NULL,
    "rpe" DECIMAL(65,30),
    "weight" DECIMAL(65,30),
    "workoutId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Set" ADD FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
