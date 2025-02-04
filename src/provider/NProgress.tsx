"use client";
// package import
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="2px"
      color="#D6CEC3"
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
