import React from "react"
import { Link } from "react-router-dom"
import { Box, AppBar, Typography, Toolbar, Button, IconButton, Popper } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import MoreIcon from "@mui/icons-material/MoreVert"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "./app-nav-header.scss"
import { AppNavDrawer } from "@comps/app-nav-drawer/app-nav-drawer"
import { AppNavPopper } from "@comps/app-nav-popper/app-nav-popper"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const AppNavHeader = () => {
  const [isDrawer, setDrawer] = React.useState<boolean>(false)
  const [isPopper, setPopper] = React.useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const togglePopper = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setPopper(!isPopper)
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
          <Typography
            variant="h6"
            component="div"
            sx={{ py: 2, flexGrow: 1, display: { xs: "block" } }}
          >
            Vite Template
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
          <IconButton
            edge="end"
            size="large"
            color="inherit"
            aria-label="display more actions"
            onClick={togglePopper}
          >
            <MoreIcon />
          </IconButton>
          <AppNavPopper isPopper={isPopper} togglePopper={togglePopper} anchorEl={anchorEl} popperItems={popperItems} />
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <AppNavDrawer isDrawer={isDrawer} setDrawer={setDrawer} navItems={navItems} />
      </Box>
    </Box>
  )
}
