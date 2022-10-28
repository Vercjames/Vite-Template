import React from "react"
import { Outlet } from "react-router"
import { Box, Toolbar } from "@mui/material"

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
    <Box className="AuthLayout">
      <AppNavHeader />
      <Box component="main" p={3} sx={{ flexGrow: 1 }}>
        {/* A blank <Toolbar /> can be used to avoid another active toolbar */}
        <Toolbar />

        {/* Our Route content is rendered below inside this <Outlet /> */}
        <Outlet />
      </Box>
    </Box>
  )
}
