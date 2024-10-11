"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "./Icons";
import { navBarLinks } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    if (open) {
      document.body.style.overflow = "auto";
      setOpen(false);
    } else {
      document.body.style.overflow = "hidden";
      setOpen(true);
    }
  };

  useEffect(() => {
    setOpen(false);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [pathname]);

  return (
    <header className="absolute w-full bg-[linear-gradient(270deg,_#2653ba_0%,_#956eef_100%)]">
      <nav className="container h-20 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <h1 className="text-3xl text-white font-semiboldbold font-popins">
              Tech Blog
            </h1>
          </Link>
        </div>
        <div
          className={cn(
            "flex items-center gap-10 lg:gap-20 max-lg:fixed max-lg:w-full h-max   left-0 max-lg:bg-white  z-20 max-lg:flex-col max-lg:p-10 transition-all duration-300 max-lg:text-center",
            open ? "top-0" : "-top-full"
          )}
        >
          <ul className="flex gap-10 lg:gap-20 max-lg:flex-col">
            {navBarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={cn(
                    "text-white hover:text-secondary transition-all font-popins max-lg:text-black ",
                    pathname === link.path && "text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button
          size={"icon"}
          onClick={handleToggle}
          className="lg:hidden relative z-20"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </Button>
        <div
          onClick={handleToggle}
          className={cn(
            "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10",
            open ? "block" : "hidden"
          )}
        ></div>
      </nav>
    </header>
  );
};

export default Navbar;
