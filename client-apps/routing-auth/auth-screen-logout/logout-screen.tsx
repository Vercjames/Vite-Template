import React from "react"
import { Button, Typography } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./logout-screen.scss"
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@schemas/schema-auth/auth-store"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AuthLogoutScreen = () => {
  const AuthStore: IAuthStore = MSTContext().AuthStore

  React.useEffect(() => {
    AuthStore.logout()
  }, [])

  return (
    <div className="AutLoginScreen">
      <Typography variant="h6">
        You have been logged out Successfully
      </Typography>
    </div>
  )
}


