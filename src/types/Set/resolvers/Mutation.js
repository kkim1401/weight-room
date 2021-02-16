/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {*} parent
 * @param {{
 * exerciseId: number|string,
 * notes: string|undefined,
 * percentage: number|undefined,
 * reps: number,
 * rpe: number|undefined,
 * weight: number|undefined,
 * workoutId: number|string,
 * }} args
 * @param {{ prisma: Prisma }} context
 */
function createSet(parent, args, context) {
  const { exerciseId, workoutId, ...rest } = args;
  return context.prisma.set.create({
    data: {
      ...rest,
      exercise: {
        connect: { id: Number(exerciseId) },
      },
      workout: {
        connect: { id: Number(workoutId) },
      },
    },
  });
}

/**
 *
 * @param {*} parent
 * @param {{
 * id: number|string,
 * notes: string|undefined,
 * percentage: number|undefined,
 * reps: number|undefined,
 * rpe: number|undefined,
 * weight: number|undefined,
 * }} args
 * @param {{ prisma: Prisma }} context
 */
function updateSet(parent, args, context) {
  const { id, ...rest } = args;
  return context.prisma.set.update({
    data: rest,
    where: { id: Number(id) },
  });
}

/**
 *
 * @param {*} parent
 * @param {{ id: number }} args
 * @param {{ prisma: Prisma }} context
 */
function deleteSet(parent, args, context) {
  return context.prisma.set.delete({
    where: { id: Number(args.id) },
  });
}

export default {
  createSet,
  deleteSet,
  updateSet,
};
