import React from "react"
import { Box, Typography, Card, Grid, Icon, Button } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

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
import { SideDrawer } from "@comps/side-drawer/SideDrawer"
import { FormCRUDTask } from "@comps/form-crud-task/FormCRUDTask"
import colors from "@styles/colors.module.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const PortalDashboardScreen = observer(() => {
  const TaskStore: ITaskStore = MSTContext().TaskStore
  const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  const [selectedTask, setSelectedTask] = React.useState<ITaskModel | null>(null)

  const onCloseDrawer = () => {
    setSelectedTask(null)
    setDrawerOpen(false)
  }

  const onEditTask = (task: ITaskModel) => {
    setSelectedTask(task)
    setDrawerOpen(true)
  }

  return (
    <Box className="PortalDashboardScreen">
      <SideDrawer position="right" isDrawerOpen={isDrawerOpen} onCloseDrawer={onCloseDrawer}>
        <FormCRUDTask selectedTask={selectedTask} closeDrawer={onCloseDrawer} />
      </SideDrawer>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          Dashboard Screen
        </Typography>
        <Button variant="contained" onClick={() => setDrawerOpen(true)} disableElevation style={{ minWidth: 150, maxWidth: 150 }}>
          <Icon className="material-icons-outlined" style={{ fontSize: 16, marginRight: 10 }}>add</Icon>
          Add Task
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
              <Grid item xs={6} style={{ fontSize: 12, color: colors.DARK }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Task Description
                </Typography>
              </Grid>
              <Grid item xs={3} style={{ fontSize: 12, color: colors.DARK, textAlign: "right" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Actions
                </Typography>
              </Grid>
            </Grid>
            {TaskStore.TaskCollection.map((Task: ITaskModel, index: number) => (
              <Grid container key={index} sx={{ pt: 1 }}>
                <Grid item xs={1} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.id.substring(0, 4)}
                  </Typography>
                </Grid>
                <Grid item xs={2} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.title}
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.description}
                  </Typography>
                </Grid>
                <Grid item xs={3} style={{ fontSize: 12, color: colors.DARK, textAlign: "right" }}>
                  <Button variant="contained" onClick={() => onEditTask(Task)} style={{ minWidth: 150, maxWidth: 150 }}>
                    <EditIcon />
                  </Button>
                  <Button variant="contained" onClick={() => onEditTask(Task)} style={{ minWidth: 150, maxWidth: 150 }}>
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Card>
    </Box>
  )
})

