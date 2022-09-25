import React from "react"
import { Outlet } from "react-router"
import { Box, Toolbar } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-layout.scss"
import { PortalNavDrawer } from "@comps/portal-nav-drawer/portal-nav-drawer"
import { PortalNavHeader } from "@comps/portal-nav-header/portal-nav-header"
import { PortalFooter } from "@comps/portal-footer/portal-footer"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalLayout = () => {
  const [isMobile, setMobile] = React.useState<boolean>(false)
  const [drawerWidth, setDrawerWidth] = React.useState<number>(240)

  const handleMobile = () => {
    setDrawerWidth(isMobile ? 240 : 60)
    setMobile(!isMobile)
  }

  return (
    <Box className="PortalLayout" sx={{ display: "flex" }}>
      <PortalNavHeader drawerWidth={drawerWidth} isMobile={isMobile} setMobile={handleMobile} />
      <PortalNavDrawer drawerWidth={drawerWidth} isMobile={isMobile} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ p: 3, mb: 10 }}>
          {/* This is a cute trick provided my the Material UI. */}
          {/* A blank <Toolbar /> can be used to avoid another active toolbar */}
          <Toolbar />

          {/* Our Route content is rendered below inside this <Outlet /> */}
          <Outlet />
        </Box>

        <PortalFooter drawerWidth={drawerWidth} />
      </Box>
    </Box>
  )
}
