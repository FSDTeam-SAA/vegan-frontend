export interface SubmittedTicketDataType {
    id : number 
    name : string
    date : string
    message : string
    status : string
}

export const SubmittedTicketData : SubmittedTicketDataType[] = [
    {
        id : 1,
        name : "TICK-001",
        date : "Jan 14, 2025",
        message : "Issue with order tracking",
        status : "Resolved"
    },
    {
        id : 2,
        name : "TICK-001",
        date : "Jan 14, 2025",
        message : "Issue with order tracking",
        status : "In Progress"
    },
    {
        id : 3,
        name : "TICK-001",
        date : "Jan 14, 2025",
        message : "Issue with order tracking",
        status : "Pending"
    },
]