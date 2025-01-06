"use client";

import { cn } from "@/lib/utils";
import { slideDown } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [shouldMobileNavOpen, setShouldMobileNavOpen] =
    useState<boolean>(false);

  const navLinks = (
    <>
      <Link href="/" className="nav_link_hover">
        Home
      </Link>
      <Link href="/#about" className="nav_link_hover">
        About
      </Link>
      <Link href="/#how-it-works" className="nav_link_hover">
        How it works
      </Link>
      <Link href="/#practices" className="nav_link_hover">
        Practices
      </Link>
      <Link href="/#stories" className="nav_link_hover">
        Stories
      </Link>
    </>
  );

  return (
    <>
      <header className="h-20 bg-white flex items-center sticky top-0 left-0 right-0 z-[100]">
        <div className="container flex items-center justify-between gap-5 md:gap-10">
          <Link href="/" className="font-semibold">
            YWZ
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              {navLinks}
              <Link
                href="/classes"
                className="border px-5 py-2.5 bg-gray hover:bg-crimson hover:text-white transition duration-300 ease-in-out"
              >
                Book a class
              </Link>
            </ul>
          </nav>
          <button
            onClick={() => setShouldMobileNavOpen(!shouldMobileNavOpen)}
            className="flex flex-col gap-[9px] md:hidden w-[28px] overflow-hidden"
          >
            <span
              className={cn(
                "w-full h-px bg-black origin-left transition-transform duration-300 ease-in-out rounded-full",
                shouldMobileNavOpen && "rotate-45"
              )}
            />
            <span
              className={cn(
                "w-full h-px bg-black origin-left transition-transform duration-300 ease-in-out rounded-full",
                shouldMobileNavOpen && "translate-x-full"
              )}
            />
            <span
              className={cn(
                "w-full h-px bg-black origin-left transition-transform duration-300 ease-in-out rounded-full",
                shouldMobileNavOpen && "-rotate-45"
              )}
            />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {shouldMobileNavOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideDown()}
            onClick={() => setShouldMobileNavOpen(!shouldMobileNavOpen)}
            className="fixed z-[99] top-20 left-0 bottom-0 right-0 bg-gray h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-5 md:hidden"
          >
            {navLinks}
            <Link
              href="/classes"
              className="border px-5 py-2.5 bg-gray hover:bg-crimson hover:text-white transition duration-300 ease-in-out"
            >
              Book a class
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
