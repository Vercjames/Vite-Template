import React from "react"
import { Box, Typography, Divider } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./PortalFooter.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
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
