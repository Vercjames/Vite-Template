import React from "react"
import { useNavigate } from "react-router-dom"
import {  Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-nav-drawer.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalNavDrawer = ({ drawerWidth }: { drawerWidth: number }) => {
  const navigate = useNavigate()
  return (
      <Drawer
        variant="permanent"
        className="PortalNavDrawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Divider />
        Neat...
      </Drawer>
  )
}
