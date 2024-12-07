import Link from "next/link";
import { getData } from "@/lib/getData";
import Breadcrumbs from "./components/BreadCrumb";

export default function HomePage(){
  const data = getData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul className="space-y-4">
        {data.categories.map((category: any) => (
          <li key={category.id} className="text-lg">
            <Link href={`/categories/${category.id}`} className="text-red-600">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

