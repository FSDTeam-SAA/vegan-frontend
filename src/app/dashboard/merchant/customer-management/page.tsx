import { auth } from "@/auth";
import CustomerCommunication from "../_components/customer/CustomerCommunication";
import DashboardHeading from "../_components/dashboard-heading";

export default async function page() {
  const currentUser = await auth();
  if (!currentUser) return null;

  console.log(currentUser);

  return (
    <div className="min-h-screen p-6">
      <DashboardHeading
        title="Customer Communication"
        subTitle="Add contact options to make it easy for customers to reach out to you"
      />
      <CustomerCommunication userId={currentUser.user.userId} />
    </div>
  );
}
