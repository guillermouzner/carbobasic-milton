"use client";

import clsx from "clsx";
import Link from "next/link";

// import {UserAvatar} from "./user-avatar";

import useScroll from "@/hooks/use-scroll";

export function Navbar() {
  const scrolled = useScroll(80);

  return (
    <div
      className={clsx(
        `sticky inset-x-0 top-0 z-30 w-full transition-all bg-gray-100/50 dark:bg-gray-900/60 dark:border-gray-800`,
        {
          "border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/60 backdrop-blur-sm":
            scrolled,
        },
      )}
    >
      <div className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20`}>
        <nav className="flex h-16 gap-6 uppercase text-green-600 font-semibold items-center justify-center">
          <Link className="transition-colors duration-300 hover:text-blue-900" href={"/"}>
            home
          </Link>
          <Link className="transition-colors duration-300 hover:text-blue-900" href={"/about"}>
            about
          </Link>
          <Link className="transition-colors duration-300 hover:text-blue-900" href={"/services"}>
            services
          </Link>
          <Link className="transition-colors duration-300 hover:text-blue-900" href={"/portfolio"}>
            portfolio
          </Link>
          <Link className="transition-colors duration-300 hover:text-blue-900" href={"/contact"}>
            contact
          </Link>
          <Link className="transition-colors duration-300 hover:text-blue-900" href={"/blog"}>
            blog
          </Link>
        </nav>
      </div>
    </div>
  );
}
