/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {*} parent
 * @param {{
 * category: string|undefined,
 * max: number|undefined,
 * name: string,
 * primaryMuscle: string|undefined,
 * secondaryMuscle: string|undefined,
 * }} args
 * @param {{ prisma: Prisma }} context
 */
function createExercise(parent, args, context) {
  return context.prisma.exercise.create({
    data: args,
  });
}

/**
 *
 * @param {*} parent
 * @param {{ id: number }} args
 * @param {{ prisma: Prisma }} context
 */
async function deleteExercise(parent, args, context) {
  const where = { id: Number(args.id) };
  await context.prisma.onDelete({ model: 'Exercise', where });
  return context.prisma.exercise.delete({
    where,
  });
}

/**
 *
 * @param {*} parent
 * @param {{
 * category: string|undefined,
 * id: number|string,
 * max: number|undefined,
 * name: string|undefined,
 * primaryMuscle: string|undefined,
 * secondaryMuscle: string|undefined,
 * }} args
 * @param {{ prisma: Prisma }} context
 */
function updateExercise(parent, args, context) {
  const { id, ...rest } = args;
  return context.prisma.exercise.update({
    data: rest,
    where: { id: Number(id) },
  });
}

export default {
  createExercise,
  deleteExercise,
  updateExercise,
};
