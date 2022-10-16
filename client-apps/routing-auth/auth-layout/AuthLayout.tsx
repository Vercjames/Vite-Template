import React from "react"
import { Outlet } from "react-router"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./AuthLayout.scss"
import { AppNavHeader } from "@comps/app-nav-header/AppNavHeader"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AuthLayout = () => {
  return (
    <>
      <AppNavHeader />
      <div className="AuthLayout">
        <Outlet />
      </div>
    </>
  )
}
