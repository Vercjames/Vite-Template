import React, { ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme, Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import DashboardIcon from "@mui/icons-material/Dashboard"
import SettingsIcon from "@mui/icons-material/Settings"
import AccountBoxIcon from "@mui/icons-material/AccountBox"


// Application Screen || App State
// =====================================================================================================================
// =====================================================================================================================
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-nav-drawer.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalNavDrawer = ({ drawerWidth, isMobile }: { drawerWidth: number, isMobile: boolean }) => {
  const AuthStore: IAuthStore = MSTContext().AuthStore
  const navigate = useNavigate()
  const { palette } = useTheme()

  const portalNavItems: Array<{name: string, icon: ReactElement, route: string}> = [
    { name: "Dash", icon: <DashboardIcon />, route: "/" },
    { name: "Profile", icon: <AccountBoxIcon />, route: "/profile" },
    { name: "Settings", icon: <SettingsIcon />, route: "/settings" },
  ]

  const isActive = (route: string) => {
    return location.pathname.match(`^${route}$`) ? palette.primary.main : palette.text.secondary
  }

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
            {/* The minHeight property is to prevent shrinking since the ListItemText is larger than the ListItemIcon */}
            <ListItemButton onClick={() => navigate(item.route)} sx={{ minHeight: 48 }}>
              {/* Fun little .match(regexp) to make sure Path: "/" doesnt active for every page */}
              <ListItemIcon sx={{ minWidth: 0, mr: !isMobile ? 3 : 'auto', color: isActive(item.route) }}>
                {item.icon}
              </ListItemIcon>
              {/* Fun little .match(regexp) to make sure Path: "/" doesnt active for every page */}
              <ListItemText style={{ color: (location.pathname.match(`^${item.route}$`) ? palette.primary.main : palette.text.secondary) }} sx={{ display: isMobile ? "none" : "static" }}>
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box style={{ marginTop: "auto" }}>
        <Divider />
        <List>
          <ListItem disablePadding>
            {/* The minHeight property is to prevent shrinking since the ListItemText is larger than the ListItemIcon */}
            <ListItemButton onClick={() => AuthStore.logout()} sx={{ minHeight: 48 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: !isMobile ? 3 : 'auto' }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText sx={{ display: isMobile ? "none" : "static"  }}>
                Logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
