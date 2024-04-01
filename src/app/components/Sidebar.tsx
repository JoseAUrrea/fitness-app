"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Divider, Flex } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const Sidebar = ( {isLoggedIn }: {isLoggedIn: boolean} ) => {
    const [authCheck, setAuthCheck ] = useState(isLoggedIn);
    //console.log("isLoggedIn: ", isLoggedIn);
    const [isSidebarOpen, setIsSideBarOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);


    const toggleSidebar = () => setIsSideBarOpen(!isSidebarOpen);

    const router = useRouter();
    useEffect(() => {
        const hubListenerCancel = Hub.listen("auth", (data) => {
            switch (data.payload.event) {
                case "signedIn":
                    setAuthCheck(true);
                    router.push('/');
                    break;
                case "signedOut":
                    setAuthCheck(false);
                    router.push('/login');
                    break;
            }
        })
        return () => hubListenerCancel();
    }, [router]);

    const LogInLogOut = async () => {
        if(authCheck) {
            await signOut();
        } else {
            router.push('/login');
        }
    };

    const defaultRoutes = [
        {href: `/`, label: "Home"},
        {href: `/info`, label: "Edit Info", loggedIn: true},
        {href: `/history`, label: "History", loggedIn: true},
    ];

    const routes = defaultRoutes.filter(
        (route) => route.loggedIn === authCheck || route.loggedIn === undefined
    )

    return (
        <>
            {!isSidebarOpen ? (
                <div className = "fixed p-4 pt-[65px] border-r shadow w-1/5 h-screen">
                    {authCheck ? (
                        <div>
                            <button
                                ref={buttonRef}
                                onClick={() => toggleSidebar()} 
                                className="mb-2">
                                <MdOutlineKeyboardDoubleArrowLeft className="text-2xl text-slate-400" />
                            </button>
                            <Divider />
                            <div className="mt-4 flex flex-col space-y-4">
                                {routes.map((route) => (
                                    <Link key={route.href} href={route.href}>
                                        {route.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <> {/* Empty fragment */}
                        </>
                    )}
                    
                    <button 
                        className="mt-4 bg-slate-200 rounded border border-slate-400 p-2 w-full hover:bg-slate-400 hover:text-white"
                        onClick={LogInLogOut}
                    >
                        {authCheck ? "Log Out" : "Log In"}
                    </button>
                    
                </div>
            ) : (
                <div className = "fixed p-4 pt-[65px] border-r shadow w-1/8 h-screen">
                    <button
                        ref={buttonRef}
                        onClick={() => toggleSidebar()} 
                        className="mb-2">
                        <MdOutlineKeyboardDoubleArrowRight className="text-2xl text-slate-400" />
                    </button>
                </div>
            )}
        </>
    )
}

export default Sidebar;