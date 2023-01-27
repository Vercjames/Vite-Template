import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Card, CircularProgress, Grid, Icon, InputAdornment, TextField, Typography } from "@mui/material"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { Formik } from "formik"
import * as Yup from "yup"


// Application Screen || Access State
// =================================================================================================
// =================================================================================================
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./RegisterScreen.scss"
import { sleep } from "@helpers/time"
import colors from "@styles/colors.module.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AuthRegisterScreen = () => {
  const AuthStore: IAuthStore = MSTContext().AuthStore
  const [visibility, setVisibility] = React.useState<boolean>(false)
  const [confirmation, setConfirmation] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const getInitialValues = () => {
    return {
      email: "awesome@gmail.com",
      password: "Password123",
      password2: "Password123",
    }
  }

  const getFormikValidation = () => Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
    password2: Yup.string().required().min(6).oneOf([Yup.ref("password"), null], "Passwords must match"),
  })

  const onFormikSubmission = async (values: any) => {
    console.log("Your Form has submitted with these values: ", values)
    await sleep(1000)
    AuthStore.login()
    navigate("/")
  }

  return (
    <Box className="AutLoginScreen">
      <Typography paragraph variant="h6">
        Register
      </Typography>
      <Typography paragraph>
        Here is your standard, run of the mill login form. For now, any credentials will work.
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
                  type={visibility ? "text" : "password"}
                  name="Password"
                  label="Password"
                  value={values.password}
                  onBlur={handleBlur("password")}
                  onChange={handleChange("password")}
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <Icon className="material-icons" style={{ fontSize: 16, marginRight: 10 }}>lock</Icon>
                    </InputAdornment>,
                    endAdornment: <InputAdornment position="end" onClick={() => setVisibility(!visibility)}>
                      {visibility ? <VisibilityOffIcon style={{ fontSize: 16, marginRight: 10 }} /> : <VisibilityIcon style={{ fontSize: 16, marginRight: 10 }} /> }
                    </InputAdornment>,
                  }}
                />
                {(errors.password && touched.password) && (
                  <Typography sx={{ mt: 1, color: colors.ERRORColor }}>{errors.password}</Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type={confirmation ? "text" : "password"}
                  name="password2"
                  label="Confirm Password"
                  value={values.password2}
                  onBlur={handleBlur("password2")}
                  onChange={handleChange("password2")}
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <Icon className="material-icons" style={{ fontSize: 16, marginRight: 10 }}>lock</Icon>
                    </InputAdornment>,
                    endAdornment: <InputAdornment position="end" onClick={() => setConfirmation(!confirmation)}>
                      {confirmation ? <VisibilityOffIcon style={{ fontSize: 16, marginRight: 10 }} /> : <VisibilityIcon style={{ fontSize: 16, marginRight: 10 }} /> }
                    </InputAdornment>,
                  }}
                />
                {(errors.password2 && touched.password2) && (
                  <Typography sx={{ mt: 1, color: colors.ERRORColor }}>{errors.password2}</Typography>
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


