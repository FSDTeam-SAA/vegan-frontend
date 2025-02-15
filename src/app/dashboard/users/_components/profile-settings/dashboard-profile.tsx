import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "@/app/dashboard/users/_components/profile-settings/profile-form";
import { PaymentMethods } from "@/app/dashboard/users/_components/profile-settings/payment-methods";
import { NotificationSettings } from "@/app/dashboard/users/_components/profile-settings/notification-settings";

export default function DashboardProfileSettings() {
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
          <PaymentMethods />
        </TabsContent>
        <TabsContent value="notifications" className="mt-6">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </main>
  );
}
