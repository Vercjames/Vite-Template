import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Box, AppBar, Typography, Toolbar, Button, IconButton, Tooltip, Avatar, Menu, MenuItem } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import MoreIcon from "@mui/icons-material/MoreVert"
import { observer } from "mobx-react-lite"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./app-nav-header.scss"
import { AppNavDrawer } from "@comps/app-nav-drawer/app-nav-drawer"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AppNavHeader = observer(() => {
  const navigate = useNavigate()
  const [isDrawer, setDrawer] = React.useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navItems: Array<{name: string, route: string}> = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ]

  const popperItems: Array<{name: string, route: string}> = [
    { name: "Login", route: "/login" },
    { name: "Register", route: "/register" },
  ]

  return (
    <Box className="AppNavHeader" sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawer(!isDrawer)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: 26 }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VITE TEMPLATE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item: {name: string, route: string}) => (
              <Link to={item.route} key={item.name} className="nav-link">
                <Button sx={{ color: "#fff" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Tooltip title="Authentication">
              <IconButton color="inherit" onClick={handleMenu}>
                <MoreIcon />
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

      <Box component="nav">
        <AppNavDrawer isDrawer={isDrawer} setDrawer={setDrawer} navItems={navItems} />
      </Box>
    </Box>
  )
})
