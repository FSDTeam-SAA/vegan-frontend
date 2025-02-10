// import { UpComingEvents } from "./upcoming-events";

// export default function Page() {
//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <UpComingEvents
//         type="Paid"
//         title="Vegan Cooking Class"
//         description="Learn to cook delicious plant-based meals with professional guidance."
//         date="20th January, 2025"
//         timeRange="10:00am - 11:00am"
//         price={49.99}
//         metrics={{
//           registeredParticipants: 32,
//           totalAmountPaid: 1249.75,
//         }}
//         onEdit={() => console.log("Edit clicked")}
//         onDelete={() => console.log("Delete clicked")}
//       />
//       <UpComingEvents
//         type="Free"
//         title="Meal Planning Consultation"
//         description="Personalized meal planning services for individuals and families."
//         date="20th January, 2025"
//         timeRange="10:00am - 11:00am"
//         price={0}
//         onEdit={() => console.log("Edit clicked")}
//         onDelete={() => console.log("Delete clicked")}
//       />
//     </div>
//   )
// }

import { PastEvents } from "./past-events";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <PastEvents
        type="Free"
        title="Vegan Cooking Class"
        description="Learn to cook delicious plant-based meals with professional guidance."
        date="20th January, 2025"
        timeRange="10:00am - 11:00am"
        price={0}
        metrics={{
          registeredParticipants: 32,
          totalAmountPaid: 0,
        }}
        defaultExpanded={true}
      />
      <PastEvents
        type="Paid"
        title="Meal Planning Consultation"
        description="Personalized meal planning services for individuals and families."
        date="20th January, 2025"
        timeRange="10:00am - 11:00am"
        price={49.99}
        defaultExpanded={false}
      />
    </div>
  );
}
