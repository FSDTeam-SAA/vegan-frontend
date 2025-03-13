import PaymentMethod from "@/app/dashboard/professional/payment/_components/PaymentMethod";
import { NotificationSettings } from "@/app/dashboard/users/_components/profile-settings/notification-settings";
import { ProfileForm } from "@/app/dashboard/users/_components/profile-settings/profile-form";
import { auth } from "@/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function DashboardProfileSettings() {
  const currentUser = await auth();

  if (!currentUser?.user) return;
  return (
    <main className="">
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="h-auto w-full justify-start space-x-6 rounded-none border-b border-white bg-transparent p-0">
          <TabsTrigger
            value="profile"
            className="rounded-none border-b-2 border-transparent px-0 pb-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="payment"
            className="rounded-none border-b-2 border-transparent px-0 pb-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Payment Method
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="rounded-none border-b-2 border-transparent px-0 pb-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <ProfileForm />
        </TabsContent>
        <TabsContent value="payment" className="mt-6">
          <PaymentMethod
            isPaymentAdded={currentUser.user.paymentAdded}
            userId={currentUser.user.userId}
          />
        </TabsContent>
        <TabsContent value="notifications" className="mt-6">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </main>
  );
}
