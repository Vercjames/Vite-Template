import React from "react"
import { Outlet } from "react-router"
import { Box, Toolbar } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-layout.scss"
import { PortalNavDrawer } from "@comps/portal-nav-drawer/portal-nav-drawer"
import { PortalNavHeader } from "@comps/portal-nav-header/portal-nav-header"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalLayout = () => {
  const drawerWidth = 240

  return (
    <Box className="PortalLayout" sx={{ display: "flex" }}>
      <PortalNavHeader drawerWidth={drawerWidth} />
      <PortalNavDrawer drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* This is a cute trick provided my the Material UI.*/}
        {/* A blank <Toolbar /> can be used to avoid another active toolbar */}
        <Toolbar />

        {/* Our Route content is rendered below inside this <Outlet /> */}
        <Outlet />
      </Box>
    </Box>
  )
}
