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
      <Typography paragraph variant="h6">
        Welcome to My Vite Template! 😎
      </Typography>
      <Typography paragraph>
        Feel free to poke around the project because you are now inside a fully structured React application 🥳
      </Typography>
    </div>
  )
}
