import React from "react"
import { Button, Typography } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./register-screen.scss"
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AuthRegisterScreen = () => {
  const AuthStore: IAuthStore = MSTContext().AuthStore

  return (
    <div className="AutLoginScreen">
      <Typography variant="h6">
        Register Screen
      </Typography>
    </div>
  )
}


