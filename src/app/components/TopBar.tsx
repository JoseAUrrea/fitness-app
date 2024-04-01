"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Divider, Flex } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

const TopBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const [authCheck, setAuthCheck] = useState(isLoggedIn);
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
      { href: `/history`, label: "History", loggedIn: true },
    ];
  
    const routes = defaultRoutes.filter(
      (route) => route.loggedIn === authCheck || route.loggedIn === undefined
    );
  
    return (
      <div className="fixed top-0 w-full bg-black h-[50px] flex z-10 border-b border-slate-200 items-center justify-between">
        <div className="text-white p-2">Fitness Trainer</div>
        <div className="flex gap-6 text-white p-4 items-center">
        {routes.map((route) => (
            <Link key={route.href} href={route.href}>
                {route.label}
            </Link>
        ))}
          <button
            className="bg-slate-600 rounded border border-slate-800 p-1 hover:bg-slate-400 hover:text-white"
            onClick={LogInLogOut}
          >
            {authCheck ? "Log Out" : "Log In"}
          </button>
        </div>
      </div>
    );
  };
  
  export default TopBar;
  