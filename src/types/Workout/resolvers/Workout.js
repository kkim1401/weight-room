/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {{ id: number }} parent
 * @param {*} args
 * @param {{ prisma: Prisma }} context
 */
function sets(parent, args, context) {
  return context.prisma.workout
    .findUnique({
      where: { id: parent.id },
    })
    .sets();
}

export default {
  sets,
};
