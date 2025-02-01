"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Input } from "@/components/ui/input";
import UserAvatar from "@/components/shared/navbar/UserAvatar";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full gap-4 bg-light-900 px-4 py-3 shadow-light-300 dark:bg-dark-200 dark:shadow-none sm:gap-5 sm:px-6 sm:py-4">
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
          className="object-contain"
        />
        <p className="h3-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <div className="relative max-sm:hidden">
        <div className="background-light800_darkgradient flex min-h-[56px] w-[600px] items-center gap-4 rounded-xl px-4 max-lg:w-[500px] max-md:w-[320px]">
          <Image 
            src="/icons/search.svg"
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Input 
            type="text"
            placeholder="Search anything globally..."
            className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none dark:placeholder:text-light-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <ThemeToggle />
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar; 