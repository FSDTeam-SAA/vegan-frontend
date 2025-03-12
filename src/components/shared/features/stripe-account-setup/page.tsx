"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AccountSetup = () => {
  const [account, setAccount] = useState("");
  return (
    <div className="pb-[56px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <div className="flex flex-col items-start justify-start gap-[24px] md:flex-row md:items-center md:justify-between">
          <div>
            <h5 className="text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[24px]">
              Account Setup
            </h5>
            <p className="opacity-70">
              Connect your stripe account to receive payments
            </p>
          </div>
          {/* <Button
            onClick={handlePaymentMethodForm}
            className="text-base font-medium leading-[19px] text-[#1F2937]"
            size="xl"
            variant="outline"
          >
            Add A Method
          </Button> */}
        </div>

        <div className="my-4 rounded-[10px]">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Enter your account ID"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              disabled={false}
              className="h-[40px] flex-1"
            />
            <Button disabled={false} className="h-[40px]">
              Connect
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Enter your account ID to connect and start receiving payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
