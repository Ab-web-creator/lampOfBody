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
      className="fixed top-0 left-0 w-full z-50 mb-5 border-b bg-blue-100 text-blue-800 font-bold"
      onClick={closeDropdown}
    >
      <nav className="max-w-[1200px] mx-auto flex gap-5 justify-between px-4 py-2">
        <div className="flex gap-20">
        <div className="flex items-center">
          <Image
            src="/images/logo-sun.png"  
            alt="Logo"
            width={40}  
            height={40}  
            className="object-contain min-w-[40px] h-auto px-2 flex-shrink-0" 
          />
        </div>

        <div className="w-full flex gap-5 justify-center [&>*]:px-2">
       
          <Link
            href="/"
            className={`relative   group px-3 py-1 transition-all duration-300 ${
              pathname === "/" ? "text-blue-800 font-bold" : "text-blue-400"
            }`}
          >
            Patients
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-all duration-300 transform rounded-full ${
                pathname === "/" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
      
          <Link
            href="/appointments"
            className={`relative group px-3 py-1 transition-all duration-300 ${
              pathname === "/appointments" ? "text-blue-800 font-bold" : "text-blue-400"
            }`}
          >
            Appointments
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-all duration-300 transform rounded-full ${
                pathname === "/appointments" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
        
    

 

          {isSignedIn && (
            <>
            <p className="text-blue-400">|</p>
            <Link
              href="/profile"
              className={`relative group px-3 py-1 transition-all duration-300 ${
                pathname === "/profile" ? "text-blue-800 font-bold" : "text-blue-400"
              }`}
            >
              Tasks
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-all duration-300 transform rounded-full ${
                  pathname === "/profile" ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </Link>
            </>
          )}
        </div>
        </div>

        <div className="relative w-fit flex items-center">
          {isSignedIn ? (
            <div onClick={(e) => e.stopPropagation()}>
              <Button variant="primary" className="!bg-blue-300 hover:!bg-blue-500 !p-2 !rounded-full focus:ring-white focus:ring-offset-blue-700"
               onClick={toggleDropdown}
               >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a6 6 0 110 12 6 6 0 010-12zm0 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

              {showDropdown && (
                <div className="absolute right-0 mt-5 w-48 bg-white rounded-md shadow-lg py-1 text-gray-500 z-10">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-blue-200"
                    onClick={toggleDropdown}
                  >
                    {user?.firstName || "User"} (settings)
                  </Link>
                  <Link
                    href="/courses"
                    className="block px-4 py-2 hover:bg-blue-200"
                    onClick={toggleDropdown}
                  >
                   item
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-blue-200"
                    onClick={toggleDropdown}
                  >
                  item
                  </Link>

                  <br />

                  <SignOutButton>
                    <button className="block w-full text-left px-4 py-2 hover:bg-yellow-400">
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
