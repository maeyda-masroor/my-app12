import Link from "next/link";
import { getData } from "@/lib/getData";

export default function CategoryPage({ params }: { params: { id: string } }) {
  const data = getData();
  const category = data.categories.find((cat: any) => cat.id === params.id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
      <ul className="space-y-4">
        {category.products.map((product: any) => (
          <li key={product.id} className="text-lg">
            <Link
              href={`/categories/${params.id}/products/${product.id}`}
              className="text-yellow-600"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
