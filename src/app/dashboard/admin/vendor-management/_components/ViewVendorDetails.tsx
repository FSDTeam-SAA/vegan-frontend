import { X } from 'lucide-react';
import React from 'react';

const ViewVendorDetails = ({setIsOpen, bookingId} : {bookingId : number,
    setIsOpen : (open : boolean) => void
}) => {
    console.log(bookingId)
    return (
        <div>
            <X onClick={()=>setIsOpen(false)}/>
        </div>
    );
};

export default ViewVendorDetails;