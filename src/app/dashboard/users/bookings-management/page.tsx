import { auth } from "@/auth";
import dynamic from "next/dynamic";
import BookingManagementHeader from "./_components/BookingManagementHeader";
const BooklingManagementcontainerTab = dynamic(
  () => import("./_components/BooklingManagementcontainerTab"),
  { ssr: false },
);

export default async function page() {
  const currentUser = await auth();
  if (!currentUser?.user) return;

  return (
    <div>
      <BookingManagementHeader />
      <BooklingManagementcontainerTab userId={currentUser.user.userId} />
    </div>
  );
}
