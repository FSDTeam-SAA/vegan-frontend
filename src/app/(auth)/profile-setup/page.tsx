import dynamic from "next/dynamic";
import { Suspense } from "react";
const ProfileSetupForm = dynamic(
  () => import("./_components/profile-setup-form"),
  { ssr: false },
);

const Page = () => {
  return (
    <div>
      <Suspense>
        <ProfileSetupForm />
      </Suspense>
    </div>
  );
};

export default Page;
