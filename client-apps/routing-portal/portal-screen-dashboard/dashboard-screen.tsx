import React from "react"
import { Typography, Card, Grid, Icon, Button } from "@mui/material"


// Application Screen || Access State
// =====================================================================================================================
// =====================================================================================================================
import { MSTContext } from "@MSTContext"
import { ITaskModel, ITaskStore } from "@MSTInterfaces"
import { observer } from "mobx-react-lite"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./dashboard-screen.scss"
import colors from "@styles/colors.module.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const PortalDashboardScreen = observer(() => {
  const TaskStore: ITaskStore = MSTContext().TaskStore

  return (
    <div className="PortalDashboardScreen">
      <Typography variant="h6">
        Portal Dashboard Screen
      </Typography>

      <Grid container>
        <Grid item flex={1} style={{ fontSize: 24 }}>
          <div style={{ float: "right" }}>
            <Button variant="contained" onClick={() => TaskStore.addTask(`${TaskStore.TaskCollection.length}`, `description for task: ${TaskStore.TaskCollection.length}`)} disableElevation style={{ minWidth: 150, maxWidth: 150, margin: "0" }} >
              <Icon className="material-icons-outlined" style={{ fontSize: 16, marginRight: 10 }}>add</Icon>
              Add Item
            </Button>
          </div>
        </Grid>
      </Grid>

      <Card variant="outlined" sx={{ p: 2, mt: 2}} style={{ borderRadius: 4 }}>
        {TaskStore.TaskCollection.length <= 0 ? (
          <Typography style={{ textAlign: "center"}}>
            It appears no tasks have been added! please add one
          </Typography>
        ) : (
          <Grid container sx={{ px: 2 }} rowSpacing={2}>
            <Grid item xs={3} style={{ fontSize: 12, color: colors.DARK }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                TaskId
              </Typography>
            </Grid>
            <Grid item xs={9} style={{ fontSize: 12, color: colors.DARK }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                Task Description
              </Typography>
            </Grid>
            {TaskStore.TaskCollection.map((Task: ITaskModel, index: number) => (
              <>
                <Grid key={index} item xs={3} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.title}
                  </Typography>
                </Grid>
                <Grid item xs={9} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.description}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
        )}
      </Card>
    </div>
  )
})

