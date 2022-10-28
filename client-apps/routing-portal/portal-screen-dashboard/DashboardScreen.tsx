import React from "react"
import { Box, Typography, Card, Grid, Icon, Button } from "@mui/material"
import { setDelay } from "@helpers/time"

// Application Screen || Access State
// =================================================================================================
// =================================================================================================
import { MSTContext } from "@MSTContext"
import { ITaskModel, ITaskStore } from "@MSTInterfaces"
import { observer } from "mobx-react-lite"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./DashboardScreen.scss"
import colors from "@styles/colors.module.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const PortalDashboardScreen = observer(() => {
  const TaskStore: ITaskStore = MSTContext().TaskStore

  // React.useEffect(() => {
  //   console.log("1")
  //   setDelay(1000).then(() => {
  //     console.log("2")
  //     setDelay(1000).then(() => {
  //       console.log("3")
  //       setDelay(1000).then(() => {
  //         console.log("4")
  //         setDelay(1000).then(() => {
  //           console.log("5")
  //         })
  //       })
  //     })
  //   })
  // })


  const timerFunction = async () => {
    console.log("1")
    await setDelay(1000)
    throw new Error("bubble gum")
    console.log("2")
    await setDelay(1000)
    console.log("3")
    await setDelay(1000)
    return "We made it to the end"
  }

  React.useEffect(() => {
    (async () => {
      try {
        const string = await timerFunction()
        console.log("4")
        console.log(string)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="PortalDashboardScreen">

    </div>
  )
})

