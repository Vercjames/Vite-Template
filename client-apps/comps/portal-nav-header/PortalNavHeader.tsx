import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography, AppBar, Toolbar, IconButton, Avatar, Tooltip, Menu, MenuItem } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./PortalNavHeader.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const PortalNavHeader = ({ drawerWidth, isMobile, setMobile }: { drawerWidth: number, isMobile: boolean, setMobile: (params: boolean) => any }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const popperItems: Array<{name: string, route: string}> = [
    { name: "Profile", route: "/profile" },
    { name: "Settings", route: "/settings" },
  ]

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      component="nav"
      position="fixed"
      className="PortalNavHeader"
      elevation={0}
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setMobile(!isMobile)}
        >
          {isMobile ? <MenuIcon /> : <MenuOpenIcon />}

        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VITE TEMPLATE
        </Typography>
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleMenu}>
              <Avatar alt="VITE" src="https://via.placeholder.com/xxx" />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {popperItems.map((item: {name: string, route: string}) => (
              <MenuItem key={item.name} onClick={() => { navigate(item.route); handleClose() }}>{item.name}</MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
