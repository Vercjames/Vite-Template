import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Drawer, Typography, Divider, List, ListItem, ListItemButton, ListItemText  } from "@mui/material"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "./app-nav-drawer.scss"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const AppNavDrawer = ({isDrawer, setDrawer, navItems}: { isDrawer: boolean, setDrawer: (params: boolean) => any, navItems: Array<{name: string, route: string}> }) => {
  const navigate = useNavigate()
  return (
    <Box onClick={() => setDrawer(false)} sx={{ textAlign: 'center' }}>
      <Drawer
        variant="temporary"
        open={isDrawer}
        onClose={() => setDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
          Vite Template
        </Typography>
        <Divider />
        <List>
          {navItems.map((item: {name: string, route: string}) => (
            <ListItem key={item.name} disablePadding onClick={() => navigate(item.route) }>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
