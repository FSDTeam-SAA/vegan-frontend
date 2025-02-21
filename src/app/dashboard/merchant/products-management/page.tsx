import dynamic from "next/dynamic";
const ProductsManagement = dynamic(
  () => import("../_components/product/product-manament"),
  { ssr: false },
);

export default function page() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-semibold">Product Management</h1>
        <p className="text-gray-600">
          Manage your product listings efficiently, from adding new products to
          tracking stock status
        </p>
      </div>
      <ProductsManagement />
    </div>
  );
}
