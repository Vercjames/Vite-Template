import React from "react"
import { Drawer } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./SideDrawer.scss"

type Anchor = "top" | "left" | "bottom" | "right";


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const SideDrawer = (props: { position: Anchor, children: React.ReactNode, onCloseDrawer: any, isDrawerOpen: boolean }) => {
  const { position, onCloseDrawer, isDrawerOpen } = props

  return (
    <Drawer
      open={isDrawerOpen}
      anchor={position}
      onClose={() => onCloseDrawer()}
    >
      {props.children}
    </Drawer>
  )
}
