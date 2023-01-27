import React from "react"
import { Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material"
import { Formik } from "formik"
import * as Yup from "yup"


// Application Screen || Define State
// =================================================================================================
// =================================================================================================
import { ITaskModel, ITaskStore } from "@MSTInterfaces"
import { MSTContext } from "@MSTContext"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./FormCRUDTask.scss"
import colors from "@styles/colors.module.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const FormCRUDTask = ({ selectedTask, closeDrawer } : { selectedTask: ITaskModel | null, closeDrawer?: () => void }) => {
  const TaskStore: ITaskStore = MSTContext().TaskStore

  const getInitialValues = () => {
    return {
      title: selectedTask ? selectedTask.title : "",
      description: selectedTask ? selectedTask.description : "",
    }
  }

  const getFormikValidation = () => Yup.object().shape({
    title: Yup.string().required().min(4),
    description: Yup.string().required().min(4),
  })

  const onFormikSubmission = async (values: any) => {
    if (!selectedTask) {
      TaskStore.createTask({ title: values.title, description: values.description })
      // Not all forms will have a closeDrawer function
      if (closeDrawer) closeDrawer()
      return
    }
    selectedTask.set("title", values.title)
    selectedTask.set("description", values.description)
    if (closeDrawer) closeDrawer()
  }

  return (
    <Box className="FormCRUDTask">
      <Typography paragraph variant="h6">
        {selectedTask ? "Edit" : "Add"} Task
      </Typography>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={(values) => onFormikSubmission(values)}
        validationSchema={getFormikValidation()}
      >
        {({ handleChange, isSubmitting, handleBlur, errors, handleSubmit, values, touched }) => (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="Title"
                label="Title"
                value={values.title}
                onBlur={handleBlur("title")}
                onChange={handleChange("title")}
                fullWidth
              />
              {(errors.title && touched.title) && (
                <Typography sx={{ mt: 1, color: colors.ERRORColor }}>{errors.title}</Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="text"
                name="Description"
                label="Description"
                value={values.description}
                onBlur={handleBlur("description")}
                onChange={handleChange("description")}
                fullWidth
              />
              {(errors.description && touched.description) && (
                <Typography sx={{ mt: 1, color: colors.ERRORColor }}>{errors.description}</Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" fullWidth color="primary" sx={{ p: 1 }} onClick={() => handleSubmit()} disabled={isSubmitting} disableElevation>
                {!isSubmitting ? (selectedTask ? "Update" : "Create") : <CircularProgress sx={{ p: "4px" }} size={17} />}
              </Button>
            </Grid>
          </Grid>
        )}
      </Formik>
    </Box>
  )
}
