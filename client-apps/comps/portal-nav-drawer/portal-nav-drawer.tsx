import React, { ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Icon } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBoxIcon from '@mui/icons-material/AccountBox';


// Application Screen || App State
// =====================================================================================================================
// =====================================================================================================================
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"
import { observer } from "mobx-react-lite"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-nav-drawer.scss"



// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalNavDrawer = ({ drawerWidth }: { drawerWidth: number }) => {
  const AuthStore: IAuthStore = MSTContext().AuthStore
  const navigate = useNavigate()

  const portalNavItems: Array<{name: string, icon: ReactElement, route: string}> = [
    { name: "Dash", icon: <DashboardIcon />, route: "/" },
    { name: "Profile", icon: <AccountBoxIcon />, route: "/profile" },
    { name: "Settings", icon: <SettingsIcon/>, route: "/settings" },
  ]

  return (
    <Drawer
      variant="permanent"
      className="PortalNavDrawer"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <img src="/vite.svg" height="25px" className="logo" alt="Vite logo" />
      </Toolbar>
      <Divider />
      <List>
        {portalNavItems.map((item: { name: string, icon: ReactElement, route: string }, index: number) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box style={{ marginTop: "auto" }}>
        <Divider  />
        <List>
          <ListItem key={"logout"} disablePadding>
            <ListItemButton onClick={() => AuthStore.logout()}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
