import { db } from "@/lib/prisma";

export const getRestalrantBySlug = async (slug: string) => {
  const restalrant = await db.restaurant.findUnique({ where: { slug: slug } });
  return restalrant;
};
