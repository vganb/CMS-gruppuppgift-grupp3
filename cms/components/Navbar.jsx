"use client";

import { UserButton, useUser } from "@clerk/nextjs";
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
          Logo
        </Link>
        <div className="px-6 py-4 ">
          {/* <Links/> */}
          {isSignedIn ? (
            <div className="flex gap-20">
              Hello {user.fullName}!
                      <UserButton fallbackRedirectUrl="/" />
            </div>
          ) : (
            <div className="flex gap-8">
              <Link href={"/sign-in"}>
                <button className=" bg-slate-600 px-3 py-1 rounded border">
                  Login
                </button>
              </Link>
              <Link href={"/sign-up"}>
                <button className="bg-slate-600 px-3 py-1 rounded border">
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