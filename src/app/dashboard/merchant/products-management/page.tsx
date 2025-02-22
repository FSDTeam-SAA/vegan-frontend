import { auth } from "@/auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
const ProductsManagement = dynamic(
  () => import("../_components/product/product-manament"),
  { ssr: false },
);

export default async function page() {
  const session = await auth();
  if (!session || session?.user?.accountType !== "merchant") redirect("/");

  const merchantID = session.user.userId;
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-semibold">Product Management</h1>
        <p className="text-gray-600">
          Manage your product listings efficiently, from adding new products to
          tracking stock status
        </p>
      </div>
      <ProductsManagement merchantID={merchantID} />
    </div>
  );
}
