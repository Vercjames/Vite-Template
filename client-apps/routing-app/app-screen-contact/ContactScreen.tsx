import React from "react"
import { Box, Typography, Card, Grid, Button, TextField, InputAdornment, Icon, CircularProgress } from "@mui/material"
import { Formik } from "formik"
import * as Yup from "yup"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./ContactScreen.scss"
import colors from "@styles/colors.module.scss"
import { sleep } from "@helpers/time"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppContactScreen = () => {
  const getInitialValues = () => {
    return {
      name: "Tester",
      email: "Tester@gmail.com",
      message: "WOW! Thanks a ton 😉",
    }
  }

  const getFormikValidation = () => Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    message: Yup.string().required(),
  })

  const onFormikSubmission = async (values: any) => {
    console.log("Your Form has submitted with these values: ", values)
    await sleep(1000)
  }

  return (
    <Box className="AppContactScreen">
      <Typography paragraph variant="h6">
        Contact Me!
      </Typography>
      <Typography paragraph>
        Right now this contact form is just to showcase Formik and Yup working together to showcase how to use them in the project.
      </Typography>

      <Card sx={{ p: 2 }}>
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
                  name="Name"
                  label="Name"
                  value={values.name}
                  onBlur={handleBlur("name")}
                  onChange={handleChange("name")}
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <Icon className="material-icons" style={{ fontSize: 16, marginRight: 10 }}>person</Icon>
                    </InputAdornment>,
                  }}
                />
                {(errors.name && touched.name) && (
                  <Typography sx={{ mt: 1, color: colors.ERRORColor }}>{errors.name}</Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="Email"
                  label="Email"
                  value={values.email}
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <Icon className="material-icons" style={{ fontSize: 16, marginRight: 10 }}>email</Icon>
                    </InputAdornment>,
                  }}
                />
                {(errors.email && touched.email) && (
                  <Typography sx={{ mt: 1, color: colors.ERRORColor }}>{errors.email}</Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="Message"
                  label="Message"
                  value={values.message}
                  onBlur={handleBlur("message")}
                  onChange={handleChange("message")}
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <Icon className="material-icons" style={{ fontSize: 16, marginRight: 10 }}>edit</Icon>
                    </InputAdornment>,
                  }}
                />
                {(errors.message && touched.message) && (
                  <Typography sx={{ mt: 1, color: colors.ERRORColor }}>{errors.message}</Typography>
                )}
              </Grid>

              <Grid item xs={12} sm={3}>
                <Button variant="contained" color="primary" sx={{ minWidth: "140px", p: 1 }} onClick={() => handleSubmit()} disabled={isSubmitting} disableElevation>
                  {!isSubmitting ? "Submit" : <CircularProgress sx={{ p: "4px" }} size={17} />}
                </Button>
              </Grid>
            </Grid>
          )}
        </Formik>
      </Card>
    </Box>
  )
}

