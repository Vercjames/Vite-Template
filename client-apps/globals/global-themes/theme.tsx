import { createTheme } from "@mui/material/styles"
import { green, purple } from "@mui/material/colors"


// Application Theme || Define Exports
// =================================================================================================
// =================================================================================================
export const MUITheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
})
