"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button"


const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }
// console.log(user)
  return (
    <div className="lg:flex flex-col">
      <div className="flex border-b justify-between bg-slate-600/60">
        <Link href={"/"} className="md:block hidden text-4xl font-bold px-8 py-2">
          <Image src="/klippiz.png"
            className="rounded border-black"
            width={50 }
            height={50}
            alt=""
          
          />
        </Link>
        <div className="px-6 py-4">
          {/* <Links/> */}
          {isSignedIn ? (
            <div className="flex flex-wrap gap-10 items-center text-white">
              Hello {user.fullName}!
                      <UserButton fallbackRedirectUrl="/" />
              <div className="flex flex-wrap gap-2 md:gap-1">
              <Link  href={"/admin/create"}>
                <Button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Create event
                  </Button>
              </Link>
              <Link  href={"/admin/dashboard"}>
                <Button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Dashboard
                  </Button>
                </Link>
                <Link  href={"/admin/Deltagarlista"}>
                <Button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  User List
                  </Button>
                </Link>
                <Link  href={"/admin/manage-users"}>
                <Button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Manage User
                  </Button>
                </Link>
                <Link  href={"/admin/landing-page"}>
                <Button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Landing Page
                  </Button>
              </Link>
          </div>
            </div>
          ) : (
            <div className="flex gap-5 items-center text-white">
              <Link href={"/sign-in"}>
                <Button className=" bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Login
                </Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Sign Up
                </Button>
              </Link>
                      </div>

          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

// import { SignIn } from "@clerk/clerk-react"