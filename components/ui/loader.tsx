"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div
      className={cn(
        "flex h-screen items-center justify-center bg-white w-full z-[9999]",
        loading ? "fixed" : "hidden"
      )}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
