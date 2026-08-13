import { createHash } from "crypto";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

async function main() {
  const email = "demo@foundersdeck.com";
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    await prisma.user.create({
      data: { name: "Demo Founder", email, passwordHash: hashPassword("demo1234") },
    });
    console.log("Seeded demo user:", email);
  } else {
    console.log("Demo user already exists:", email);
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
