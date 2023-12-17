import { LocalFireDepartment } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

function CalorieMonitor() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Calories{" "}
          <LocalFireDepartment fontSize="2rem" className=" text-yellow-400" />
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Typography align="center">Total Cons</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            2400ml
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CalorieMonitor;
