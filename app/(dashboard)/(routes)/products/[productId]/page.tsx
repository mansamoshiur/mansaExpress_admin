import ProductForm from "./_components/product-form";
import { db } from "@/lib/db";

const ProductIdPage = async ({ params }: { params: { productId: string } }) => {
  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });
  const category = await db.category.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  const color = await db.color.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  const size = await db.size.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={category}
          colors={color}
          sizes={size}
          initialData={product}
        />
      </div>
    </div>
  );
};

export default ProductIdPage;
