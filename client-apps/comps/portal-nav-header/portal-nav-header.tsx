import React from "react"
import { useNavigate } from "react-router-dom"
import { Typography, AppBar, Toolbar } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-nav-header.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalNavHeader = ({ drawerWidth }: { drawerWidth: number }) => {
  const navigate = useNavigate()
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
        [VITE TEMPLATE]
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
