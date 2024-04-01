"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import useOutsideClick from "../hooks/useOutsideClick";
import { RxDropdownMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";

const TopBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const [authCheck, setAuthCheck] = useState(isLoggedIn);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useOutsideClick(dropdownRef, () => setIsDropdownOpen(false), buttonRef);
    const handleLinkClick = () => {
      setIsDropdownOpen(false); 
    };

    const closeDropdown = () => setIsDropdownOpen(false);
    const router = useRouter();
  
    useEffect(() => {
      const hubListenerCancel = Hub.listen("auth", (data) => {
        switch (data.payload.event) {
          case "signedIn":
            setAuthCheck(true);
            router.push("/");
            break;
          case "signedOut":
            setAuthCheck(false);
            router.push("/login");
            break;
        }
      });
      return () => hubListenerCancel();
    }, [router]);
  
    const LogInLogOut = async () => {
      if (authCheck) {
        await signOut();
      } else {
        router.push("/login");
      }
    };
  
    const defaultRoutes = [
      { href: `/`, label: "Home" },
      { href: `/info`, label: "Edit Info", loggedIn: true },
      { href: `/workoutHistory`, label: "Fitness", loggedIn: true },
      { href: `/nutritionHistory`, label: "Nutrition", loggedIn: true },
    ];
  
    const routes = defaultRoutes.filter(
      (route) => route.loggedIn === authCheck || route.loggedIn === undefined
    );
  
    return (
      <div className="fixed top-0 w-full bg-black h-[50px] flex z-10 border-b border-slate-200 items-center justify-between">
        <div className="text-white p-2">Fitness Trainer</div>
        <div className="flex gap-6 text-white p-4 items-center ">
        {/* {routes.map((route) => (
            <Link key={route.href} href={route.href}>
                {route.label}
            </Link>
        ))} */}
          {/* <button
            className="bg-slate-600 rounded border border-slate-800 py-1 hover:bg-slate-400 hover:text-white px-2"
            onClick={LogInLogOut}
          >
            {authCheck ? "Log Out" : "Log In"}
          </button>
        </div> */}
        <div className="flex items-center gap-2 px-2">
          <Link href="/">
            <IoHomeOutline className="md:w-[30px] md:h-[30px] w-[25px] h-[25px] text-white "/>
          </Link>
          <button 
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="rounded px-2"
            >
              <RxDropdownMenu className="md:w-[35px] md:h-[35px] w-[32px] h-[32px] text-white "/>
          </button>

          <button
            className="bg-slate-600 rounded border border-slate-800 py-1 hover:bg-slate-400 hover:text-white px-2"
            onClick={LogInLogOut}
          >
            {authCheck ? "Log Out" : "Log In"}
          </button>
        </div>
        </div>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="flex-col absolute right-5 w-40 y-5 bg-gray-400 bg-opacity-100 shadow-md rounded top-[50px]">
              {routes.map((route) => (
                <div key={route.href} className="px-2 py-2">
                  <Link href={route.href} onClick={handleLinkClick}>
                    {route.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  };
  
  export default TopBar;
  