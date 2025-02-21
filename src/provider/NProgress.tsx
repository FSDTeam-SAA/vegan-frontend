"use client";
// package import
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="2px"
      color="#FFFFFF"
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
