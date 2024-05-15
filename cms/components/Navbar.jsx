"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }
console.log(user)
  return (
    <div>
      <div className="flex justify-between border-b bg-slate-600/60">
        <Link href={"/"} className="text-4xl font-bold px-8 py-2">
          <Image src="/klippiz.png"
            className="rounded border-black"
            width={50 }
            height={50}
            alt=""
          
          />
        </Link>
        <div className="px-6 py-4 ">
          {/* <Links/> */}
          {isSignedIn ? (
            <div className="flex gap-20 items-center text-white">
              Hello {user.fullName}!
                      <UserButton fallbackRedirectUrl="/" />
              <div className="flex gap-5">
              <Link  href={"/admin/create"}>
                <button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Create event
                  </button>
              </Link>
              <Link  href={"/admin/dashboard"}>
                <button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Dashboard
                  </button>
              </Link>
          </div>
            </div>
          ) : (
            <div className="flex gap-8 items-center text-white">
              <Link href={"/sign-in"}>
                <button className=" bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Login
                </button>
              </Link>
              <Link href={"/sign-up"}>
                <button className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded border">
                  Sign Up
                </button>
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