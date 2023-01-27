import React from "react"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"


// Application Screen || App State
// =================================================================================================
// =================================================================================================
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"
import { observer } from "mobx-react-lite"


// Application Navigator || App Imports
// =================================================================================================
// ================================================================================================='
import { AppLayout } from "@src/routing-app/app-layout/AppLayout"
import { AppIndexScreen } from "@src/routing-app/app-screen-index/IndexScreen"
import { AppAboutScreen } from "@src/routing-app/app-screen-about/AboutScreen"
import { AppContactScreen } from "@src/routing-app/app-screen-contact/ContactScreen"


// Application Navigator || Auth Imports
// =================================================================================================
// =================================================================================================
import { AuthLayout } from "@src/routing-auth/auth-layout/AuthLayout"
import { AuthLoginScreen } from "@src/routing-auth/auth-screen-login/LoginScreen"
import { AuthLogoutScreen } from "@src/routing-auth/auth-screen-logout/LogoutScreen"
import { AuthRegisterScreen } from "@src/routing-auth/auth-screen-register/RegisterScreen"


// Application Navigator || Portal Imports
// =================================================================================================
// =================================================================================================
import { PortalLayout } from "@src/routing-portal/portal-layout/PortalLayout"
import { PortalDashboardScreen } from "@src/routing-portal/portal-screen-dashboard/DashboardScreen"
import { PortalSettingsScreen } from "@src/routing-portal/portal-screen-settings/SettingsScreen"
import { PortalProfileScreen } from "@src/routing-portal/portal-screen-profile/ProfileScreen"


// Application Navigator || Define Exports
// =================================================================================================
// =================================================================================================
// The Mobx `observer()` is used to reload the authentication wrapper for the 2 route types ========
export const NavigationRoot = observer(() => {
  const AuthStore: IAuthStore = MSTContext().AuthStore

  return (
    <Box className="wrapper">
      {!AuthStore.isAuthenticated ? (
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<AppIndexScreen />} />
            <Route path="about" element={<AppAboutScreen />} />
            <Route path="contact" element={<AppContactScreen />} />
            <Route path={"/*"} element={<AppIndexScreen />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<AuthLoginScreen />} />
            <Route path="logout" element={<AuthLogoutScreen />} />
            <Route path="register" element={<AuthRegisterScreen />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route element={<PortalLayout />}>
            <Route index element={<PortalDashboardScreen />} />
            <Route path="profile" element={<PortalProfileScreen />} />
            <Route path="settings" element={<PortalSettingsScreen />} />
            <Route path="logout" element={<AuthLogoutScreen />} />
            <Route path={"/*"} element={<PortalDashboardScreen />} />
          </Route>
        </Routes>
      )}
    </Box>
  )
})
