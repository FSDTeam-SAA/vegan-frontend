import { auth } from "@/auth";
import { StripeConnectionAlert } from "@/components/ui/stripe-connect-alert";
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
      <StripeConnectionAlert
        message="Connect your Stripe account to receive payments from your product sales."
        userId={merchantID}
        rediretTo="/dashboard/merchant/payment"
        role="merchant"
      />
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
