'use client'
import Header from "@/app/(private)/admin/components/header";
import React from "react";

function LayoutPage({ children }) {


  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    </>
  )
    
}

export default LayoutPage;
