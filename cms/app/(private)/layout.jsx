'use client'

import React from "react";
import Header from "./admin/components/header";

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
