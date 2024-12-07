import Link from "next/link";
import { getData } from "@/lib/getData";

interface BreadcrumbsProps {
  params: { id?: string; productId?: string };
}

export default function Breadcrumbs({ params }: BreadcrumbsProps) {
  const data = getData();
  const { id, productId } = params;

  // Find the category and product from params
  const category = id
    ? data.categories.find((cat: any) => cat.id === id)
    : null;

  const product = productId
    ? category?.products.find((prod: any) => prod.id === productId)
    : null;

  // Breadcrumbs array
  const breadcrumbs = [
    { name: "Home", href: "/" },
    category
      ? { name: category.name, href: `/categories/${category.id}` }
      : null,
    product
      ? {
          name: product.name,
          href: `/categories/${id}/products/${product.id}`,
        }
      : null,
  ].filter((crumb) => crumb !== null); ; // Remove null values

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ul className="flex space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {crumb && crumb.href ? ( // Check if `crumb` and `href` exist
              <Link href={crumb.href} className="text-blue-600 hover:underline">
                {crumb.name}
              </Link>
            ) : (
              <span>{crumb?.name}</span> // Render as plain text if no `href`
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
