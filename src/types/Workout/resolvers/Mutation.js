/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {*} parent
 * @param {{ date: string|undefined, name: string|undefined }} args
 * @param {{ prisma: Prisma }} context
 */
function createWorkout(parent, args, context) {
  return context.prisma.workout.create({
    data: args,
  });
}

/**
 *
 * @param {*} parent
 * @param {{
 * date: string|undefined
 * id: number|string
 * name: string|undefined
 * setIds: number[]|string[]|undefined
 * }} args
 * @param {{ prisma: Prisma }} context
 */
function updateWorkout(parent, args, context) {
  const { id, setIds, ...rest } = args;
  return context.prisma.workout.update({
    data: {
      ...rest,
      ...(setIds && {
        sets: {
          set: setIds.map((setId) => ({ id: setId })),
        },
      }),
    },
    where: { id: Number(id) },
  });
}

/**
 *
 * @param {*} parent
 * @param {{ id: number }} args
 * @param {{ prisma: Prisma }} context
 */
async function deleteWorkout(parent, args, context) {
  const where = { id: Number(args.id) };
  await context.prisma.onDelete({ model: 'Workout', where });
  return context.prisma.workout.delete({
    where,
  });
}

export default {
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
