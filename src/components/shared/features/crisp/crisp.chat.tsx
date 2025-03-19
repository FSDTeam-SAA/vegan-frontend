"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("936e803a-fa0d-4e90-badb-efb12d2d4386");
  }, []);
  return null;
};

export default CrispChat;
