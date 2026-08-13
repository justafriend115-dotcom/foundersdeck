import { PrismaClient } from "@prisma/client";

import { hashPassword } from "../src/lib/auth/password";

const prisma = new PrismaClient();

async function main() {
  const email = "demo@foundersdeck.com";
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    await prisma.user.update({
      where: { id: existing.id },
      data: { passwordHash: hashPassword("demo1234") },
    });
    console.log("Re-hashed demo user password:", email);
  } else {
    await prisma.user.create({
      data: { name: "Demo Founder", email, passwordHash: hashPassword("demo1234") },
    });
    console.log("Seeded demo user:", email);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
