/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {*} parent
 * @param {{ orderBy: { date: string|undefined, name: string|undefined }|undefined }} args
 * @param {{ prisma: Prisma }} context
 */

function getWorkouts(parent, args, context) {
  return context.prisma.workout.findMany();
}

/**
 *
 * @param {*} parent
 * @param {{ id: number }} args
 * @param {{ prisma: Prisma }} context
 */
function getWorkoutById(parent, args, context) {
  return context.prisma.workout.findUnique({
    include: {
      sets: {
        orderBy: {
          date: 'asc',
        },
      },
    },
    where: {
      id: Number(args.id),
    },
  });
}

export default {
  getWorkoutById,
  getWorkouts,
};
