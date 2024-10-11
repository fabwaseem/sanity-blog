import React from "react";
import { Icons } from "./Icons";
import {
  contactDetails,
  footerNavigationLinks,
  footerQuickLinks,
} from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(270deg,_#2653ba_0%,_#956eef_100%)] section-paddings text-white">
      <div className="container grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2">
          <div className="h-20">
            <Link href={"/"}>
              <h1 className="text-3xl text-white font-semiboldbold font-popins">
                Tech Blog
              </h1>
            </Link>
          </div>
          <p className="text-sm  font-light opacity-85">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            totam magnam necessitatibus fugiat? Veritatis, pariatur molestias.
            Laboriosam quaerat adipisci consequuntur possimus quod sunt ab
            labore error repudiandae facere, deserunt aspernatur.
          </p>
        </div>
        <div className="hidden md:block"></div>
        <div>
          <div className="h-20">
            <h3>Navigation</h3>
          </div>
          <ul className="flex flex-col gap-4 text-white/85 font-light">
            {footerNavigationLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="capitalize font-popins text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="h-20">
            <h3>Quick Links</h3>
          </div>
          <ul className="flex flex-col gap-4 text-white/85 font-light">
            {footerQuickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="capitalize font-popins text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-md:col-span-2">
          <div className="h-20">
            <h3>Contact Us</h3>
          </div>
          <ul className="flex flex-col gap-4 text-white/85 font-light">
            <li className=" font-popins text-sm">{contactDetails.address}</li>
            <li>
              <Link
                href={`mailto:${contactDetails.email}`}
                className=" font-popins text-sm break-words"
              >
                {contactDetails.email}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${contactDetails.phone}`}
                className="capitalize font-popins text-sm"
              >
                {contactDetails.phone}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
