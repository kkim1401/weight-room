/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {*} parent
 * @param {{ orderBy: { name: string }|undefined }} args
 * @param {{ prisma: Prisma }} context
 */
function getExercises(parent, args, context) {
  return context.prisma.exercise.findMany({
    orderBy: args.orderBy,
  });
}

/**
 *
 * @param {*} parent
 * @param {{ id: number }} args
 * @param {{ prisma: Prisma }} context
 */
function getExerciseById(parent, args, context) {
  return context.prisma.exercise.findUnique({
    where: {
      id: Number(args.id),
    },
  });
}

export default {
  getExerciseById,
  getExercises,
};
