import { Suspense } from "react";
import ProfileSetupForm from "./_components/profile-setup-form";

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
