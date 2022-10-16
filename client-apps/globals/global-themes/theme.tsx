import { createTheme } from "@mui/material/styles"
import { grey } from "@mui/material/colors"


// Application Theme || Define Exports
// =================================================================================================
// =================================================================================================
export const MUITheme = createTheme({
  palette: {
    primary: {
      main: "#d73f40",
    },
    secondary: {
      main: grey[500],
    },
  },
})
