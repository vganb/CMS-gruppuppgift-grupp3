import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <SignIn path="/sign-in" />
        {/* Optional: Add additional custom styling or elements */}
      </div>
   
  );
}