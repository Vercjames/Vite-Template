import React from "react"
import { Outlet } from "react-router"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./AppLayout.scss"
import { AppNavHeader } from "@comps/app-nav-header/AppNavHeader"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppLayout = () => {
  return (
    <>
      <AppNavHeader />
      <div className="AppLayout">
        <Outlet />
      </div>
    </>
  )
}