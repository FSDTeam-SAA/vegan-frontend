"use client";
// package import
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="4px"
      color="#1D3557"
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
