import { auth } from "@/auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
const SupportHelpForm = dynamic(
  () => import("../_components/SupportHelpCenter/SupportHelpForm"),
  { ssr: false },
);

export default async function page() {
  const currentUser = await auth();
  if (!currentUser) redirect("/onboarding");
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-[ #1F2937] mb-2 text-2xl font-semibold">
          Support & Help Center
        </h1>
        <p className="text-gray-600">
          Find everything you need to succeed on our platform.
        </p>
      </div>
      <SupportHelpForm userId={currentUser.user.userId} />
    </div>
  );
}
