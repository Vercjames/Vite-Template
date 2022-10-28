import React from "react"
import { Box, Typography, Card, Grid, Icon, Button } from "@mui/material"


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

  return (
    <div className="PortalDashboardScreen">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          Dashboard Screen
        </Typography>
        <Button variant="contained" onClick={() => TaskStore.addTask(`${TaskStore.TaskCollection.length}`, `description for task: ${TaskStore.TaskCollection.length}`)} disableElevation style={{ minWidth: 150, maxWidth: 150 }}>
          <Icon className="material-icons-outlined" style={{ fontSize: 16, marginRight: 10 }}>add</Icon>
          Add Item
        </Button>
      </Box>

      <Card variant="outlined" sx={{ p: 2, mt: 2 }}>
        {TaskStore.TaskCollection.length <= 0 ? (
          <Typography style={{ textAlign: "center" }}>
            It appears no tasks have been added! please add one
          </Typography>
        ) : (
          <Grid container sx={{ px: 2 }} rowSpacing={2}>
            <Grid container sx={{ py: 1 }}>
              <Grid item xs={1} style={{ fontSize: 12, color: colors.DARK }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Id
                </Typography>
              </Grid>
              <Grid item xs={2} style={{ fontSize: 12, color: colors.DARK }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Task Title
                </Typography>
              </Grid>
              <Grid item xs={8} style={{ fontSize: 12, color: colors.DARK }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Task Description
                </Typography>
              </Grid>
              <Grid item xs={1} style={{ fontSize: 12, color: colors.DARK, textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Actions
                </Typography>
              </Grid>
            </Grid>
            {TaskStore.TaskCollection.map((Task: ITaskModel, index: number) => (
              <Grid container key={index} sx={{ pt: 1 }}>
                <Grid item xs={1} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.id}
                  </Typography>
                </Grid>
                <Grid item xs={2} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.title}
                  </Typography>
                </Grid>
                <Grid item xs={8} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.description}
                  </Typography>
                </Grid>
                <Grid item xs={1} style={{ fontSize: 12, color: colors.DARK, textAlign: "center" }}>
                  <Button variant="contained" onClick={() => Task.changeTitle("TEST")} style={{ minWidth: 150, maxWidth: 150 }}>
                    Change Title
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Card>
    </div>
  )
})

