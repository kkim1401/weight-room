/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {{ id: number }} parent
 * @param {*} args
 * @param {{ prisma: Prisma }} context
 */
function exercise(parent, args, context) {
  return context.prisma.set
    .findUnique({
      where: { id: parent.id },
    })
    .exercise();
}

/**
 *
 * @param {{ id: number }} parent
 * @param {*} args
 * @param {{ prisma: Prisma }} context
 */
function workout(parent, args, context) {
  return context.prisma.set
    .findUnique({
      where: { id: parent.id },
    })
    .workout();
}

export default {
  exercise,
  workout,
};
