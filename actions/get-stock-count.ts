import { db } from "@/lib/db";

export const getStockCoutn = async () => {
  const stockCount = await db.product.count({
    where: {
      isArchived: false,
    },
  });
  return stockCount;
};
