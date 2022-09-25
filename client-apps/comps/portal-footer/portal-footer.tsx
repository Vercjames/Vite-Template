import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography, AppBar, Toolbar, IconButton, Avatar, Tooltip, Menu, MenuItem, Divider } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./portal-footer.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalFooter = ({ drawerWidth }: { drawerWidth: number }) => {
  const [year] = React.useState<number>(new Date().getFullYear())
  return (
    <Box component="footer" sx={{ position: "fixed", bottom: 0, width: `calc(100% - ${drawerWidth}px)`, backgroundColor: "white" }}>
      <Divider />
      <Typography sx={{ minHeight: 64, display: "flex", justifyContent: "center", alignItems: "center" }}>
        © {year} VITE TEMPLATE. All rights reserved.
      </Typography>
    </Box>
  )
}
