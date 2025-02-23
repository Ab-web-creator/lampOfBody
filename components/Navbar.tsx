"use client";

import { useState } from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; 
import Button from "./ui/button/Button";

const Navbar: React.FC = () => {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();

  const [showDropdown, setShowDropdown] = useState(false);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <section 
      className="fixed top-0 left-0 w-full z-50 mb-5 border-b bg-blue-700 text-white"
      onClick={closeDropdown}
    >
      <nav className="max-w-[1200px] mx-auto flex gap-5 justify-between px-4 py-2">
        <div className="flex gap-20">
        <div className="flex items-center border border-green-300 rounded-sm">
          <Image
            src="/images/logo-with-words.png"  
            alt="Logo"
            width={80}  
            height={20}  
            className="object-contain min-w-[80px] h-auto px-2 flex-shrink-0" 
          />
        </div>

        <div className="w-full flex gap-5 justify-center [&>*]:px-2">
          <Link
            href="/"
            className={`relative group px-3 py-1 transition-all duration-300 ${
              pathname === "/" ? "text-white" : "text-gray-200"
            }`}
          >
            Home
            <span 
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 transition-all duration-300 transform rounded-full ${
                pathname === "/" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
          <Link
            href="/courses"
            className={`relative   group px-3 py-1 transition-all duration-300 ${
              pathname === "/courses" ? "text-white" : "text-gray-200"
            }`}
          >
            Courses
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 transition-all duration-300 transform rounded-full ${
                pathname === "/courses" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
          <Link
            href="/communities"
            className={`relative group px-3 py-1 transition-all duration-300 ${
              pathname === "/communities" ? "text-white" : "text-gray-200"
            }`}
          >
            Communities
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 transition-all duration-300 transform rounded-full ${
                pathname === "/communities" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
          <Link
            href="/discussions"
            className={`relative group px-3 py-1 transition-all duration-300 ${
              pathname === "/discussions" ? "text-white" : "text-gray-200"
            }`}
          >
            Discussions
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 transition-all duration-300 transform rounded-full ${
                pathname === "/discussions" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>

          {isSignedIn && (
            <Link
              href="/profile"
              className={`relative group px-3 py-1 transition-all duration-300 ${
                pathname === "/profile" ? "text-white" : "text-gray-200"
              }`}
            >
              Profile
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 transition-all duration-300 transform rounded-full ${
                  pathname === "/profile" ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </Link>
          )}
        </div>
        </div>

        <div className="relative w-fit flex items-center">
          {isSignedIn ? (
            <div onClick={(e) => e.stopPropagation()}>
              <Button variant="secondary" className="bg-transparent !p-2 !rounded-full focus:ring-white focus:ring-offset-blue-700"
               onClick={toggleDropdown}
               >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a6 6 0 110 12 6 6 0 010-12zm0 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

              {showDropdown && (
                <div className="absolute right-0 mt-5 w-48 bg-white rounded-md shadow-lg py-1 text-gray-900 z-10">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-blue-200"
                    onClick={toggleDropdown}
                  >
                    {user?.firstName || "User"} (profile settings)
                  </Link>
                  <Link
                    href="/courses"
                    className="block px-4 py-2 hover:bg-blue-200"
                    onClick={toggleDropdown}
                  >
                   My courses
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-blue-200"
                    onClick={toggleDropdown}
                  >
                   Whatever item
                  </Link>

                  <br />

                  <SignOutButton>
                    <button className="block w-full text-left px-4 py-2 hover:bg-blue-200">
                      Logout
                    </button>
                  </SignOutButton>
                </div>
              )}
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="truncate px-4 py-1 border border-transparent rounded-md hover:border-white hover:border transition ">
                Login
              </button>
            </SignInButton>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
