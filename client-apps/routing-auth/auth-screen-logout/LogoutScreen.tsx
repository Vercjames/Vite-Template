import React from "react"
import { Box, Typography } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./LogoutScreen.scss"
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AuthLogoutScreen = () => {
  const AuthStore: IAuthStore = MSTContext().AuthStore

  React.useEffect(() => {
    AuthStore.logout()
  }, [AuthStore])

  return (
    <Box className="AutLoginScreen">
      <Typography variant="h6">
        You have been logged out Successfully
      </Typography>
    </Box>
  )
}


