"use client";

import { usePathname, useRouter } from "next/navigation";
import './admin.css'

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <form className="searchForm"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const queryTerm = formData.get("search");
          router.push(pathname + "?search=" + queryTerm);
        }}
      >
        <div className="search">
        <label className="searchText" htmlFor="search">Search for Users</label>
        <input className="searchInput" id="search" name="search" type="text" />
        <button className="searchBtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
