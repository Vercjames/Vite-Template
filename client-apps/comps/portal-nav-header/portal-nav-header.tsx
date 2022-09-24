import React from "react"
import { useNavigate } from "react-router-dom"
import { Typography, AppBar, Toolbar, IconButton, Avatar, Tooltip, Menu, MenuItem } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-nav-header.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalNavHeader = ({ drawerWidth }: { drawerWidth: number }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)


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
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          [VITE TEMPLATE]
        </Typography>
        <div>
          <Tooltip title="Open settings">
            <IconButton onClick={handleMenu} sx={{ p: 0 }}>
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
