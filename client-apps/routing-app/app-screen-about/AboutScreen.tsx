import React from "react"
import { Box, Typography, Grid, Card } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./AboutScreen.scss"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppAboutScreen = () => {
  const renderCard = (text: string) => (
    <Grid item xs={2} sx={{ my: 1 }}>
      <Card sx={{ p: 1, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Typography>
          {text}
        </Typography>
      </Card>
    </Grid>
  )

  return (
    <Box className="AppAboutScreen">
      <Typography paragraph variant="h6">
        About the Template
      </Typography>

      <Typography paragraph>
        I really wanted to create a Template that's easy to repurpose for another project, while also demoing the frameworks inside.
      </Typography>

      <Typography paragraph>
        To that end, each page has something special going on to showcase each use case while remaining easy to quickly remove. This page in particular is using a simple grid to list out all the technologies in the project
      </Typography>

      <Grid container spacing={2}>
        {renderCard("Mobx")}
        {renderCard("Mobx-State-Tree")}
        {renderCard("React")}
        {renderCard("React-Router")}
        {renderCard("Material UI")}
        {renderCard("Material Icons")}
        {renderCard("Environment Handling")}
        {renderCard("Environment Generation")}
        {renderCard("Password Hashing")}
        {renderCard("Eslint")}
        {renderCard("Formik")}
        {renderCard("Yup")}
      </Grid>
    </Box>
  )
}
