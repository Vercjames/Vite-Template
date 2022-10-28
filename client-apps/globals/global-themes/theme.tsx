import { createTheme } from "@mui/material/styles"
import colors from "@styles/colors.module.scss"

// Application Theme || Define Exports
// =================================================================================================
// =================================================================================================
export const MUITheme = createTheme({
  palette: {
    primary: {
      main: colors.PRIMARYColor,
    },
    secondary: {
      main: colors.SECONDARYColor,
    },
    error: {
      main: colors.ERRORColor,
    },
    warning: {
      main: colors.WARNINGColor,
    },
    success: {
      main: colors.SUCCESSColor,
    },
    info: {
      main: colors.INFOColor,
    },
  },
})
