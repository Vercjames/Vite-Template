import React from "react"
import { Button, Typography } from "@mui/material"


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
    <div className="AutLoginScreen">
      <Typography variant="h6">
        You have been logged out Successfully
      </Typography>
    </div>
  )
}


