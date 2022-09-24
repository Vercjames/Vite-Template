import React from "react"
import { useNavigate } from "react-router-dom"
import { Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./app-nav-popper.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AppNavPopper = ({ isPopper, togglePopper, anchorEl, popperItems } : {isPopper: boolean, togglePopper: any, anchorEl: null | HTMLElement, popperItems: Array<{name: string, route: string}> }) => {
  const navigate = useNavigate()
  return anchorEl && (
    <Popper open={isPopper} anchorEl={anchorEl} placement="bottom-end" transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow {...TransitionProps}>
          <Paper>
            <ClickAwayListener onClickAway={() => togglePopper()}>
              <MenuList
                autoFocusItem={isPopper}
                id="composition-menu"
                aria-labelledby="composition-button"
              >
                {popperItems.map((item: {name: string, route: string}) => (
                  <MenuItem onClick={() => { navigate(item.route); togglePopper() }}>{item.name}</MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}
