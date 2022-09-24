import React from "react"
import { Button, Typography } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./login-screen.scss"
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@schemas/schema-auth/auth-store"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AuthLoginScreen = () => {
 const AuthStore: IAuthStore = MSTContext().AuthStore

  return (
    <div className="AutLoginScreen">
      <Typography variant={"h6"}>
        Login Screen
      </Typography>

      <Button variant="contained" onClick={() => AuthStore.login()} >
        Login
      </Button>
    </div>
  )}


