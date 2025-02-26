import dynamic from "next/dynamic";
const AttendeeContainer = dynamic(
  () => import("./_components/attendee-container"),
  { ssr: false },
);

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <AttendeeContainer eventId={params.id} />
    </div>
  );
};

export default Page;
