/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {*} parent
 * @param {{ orderBy: { date: string }|undefined }} args
 * @param {{ prisma: Prisma }} context
 */
function getSets(parent, args, context) {
  return context.prisma.set.findMany({
    orderBy: args.orderBy,
  });
}

/**
 *
 * @param {*} parent
 * @param {*} args
 * @param {{ prisma: Prisma }} context
 */
function getSetById(parent, args, context) {
  return context.prisma.set.findUnique({
    where: {
      id: Number(args.id),
    },
  });
}

export default {
  getSetById,
  getSets,
};
