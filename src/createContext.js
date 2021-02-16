import { PrismaClient } from '@prisma/client';
import { PrismaDelete } from '@paljs/plugins';

class Prisma extends PrismaClient {
  constructor(options) {
    super(options);
  }

  async onDelete(args) {
    const prismaDelete = new PrismaDelete(this);
    await prismaDelete.onDelete(args);
  }
}

const prisma = new Prisma();

function createContext() {
  return { prisma };
}

export default createContext;
