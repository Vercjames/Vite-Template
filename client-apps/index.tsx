import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"


// Application Component || Client State
// =====================================================================================================================
// =====================================================================================================================
import { MSTRoot } from "@MSTRoot"
import { MSTProvider } from "@MSTContext"


// Application Component || Style Imports
// =====================================================================================================================
// =====================================================================================================================
import { MUITheme } from "@globals/global-themes/theme"
import { NavigationRoot } from "./navigation/navigation-root"
import "./globals/global-styles/index.scss"


// Client Application || Root Definition
// =====================================================================================================================
// =====================================================================================================================
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MSTProvider value={MSTRoot}>
    <ThemeProvider theme={MUITheme}>
      <BrowserRouter>
        <NavigationRoot />
      </BrowserRouter>
    </ThemeProvider>
  </MSTProvider>,
)
