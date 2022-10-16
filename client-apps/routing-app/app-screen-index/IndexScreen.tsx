import React from "react"
import { Typography } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./IndexScreen.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppIndexScreen = () => {
  return (
    <div className="AppIndexScreen">
      <Typography variant="h6">
        Welcome Vercjames' Vite Template!

      </Typography>
      <Typography variant="body1">
        Welcome Vercjames' Vite Template!
      </Typography>
      <Typography variant="body1">
        You can Login via a <span style={{ fontStyle: "italic"}}>fake</span> auth system as I wanted this app to stand alone
      </Typography>
    </div>
  )
}

