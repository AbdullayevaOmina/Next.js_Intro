"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav className="bg-black text-white fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">Logo</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
                >
                  Contact
                </Link>
                <Link
                  href="/services"
                  className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
                >
                  Services
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {!isClick ? (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M5 7h14M5 12h14M5 17h14"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
              >
                Contact
              </Link>
              <Link
                href="/services"
                className="hover:bg-white hover:text-black rounded-lg p-2 block text-center"
              >
                Services
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
