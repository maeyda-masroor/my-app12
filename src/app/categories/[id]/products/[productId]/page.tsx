import { getData } from "@/lib/getData";

export default function ProductPage({
  params,
}: {
  params: { id: string; productId: string };
}) {
  const data = getData();

  // Debug logs
  console.log("Params:", params);
  console.log("Data:", data);

  const category = data.categories.find((cat: any) => cat.id === params.id);

  console.log("Category:", category);

  const product = category?.products.find((prod: any) => prod.id === params.productId);

  console.log("Product:", product);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg mb-2">{product.description}</p>
      <p className="text-xl font-semibold">Price: ${product.price}</p>
    </div>
  );
}
