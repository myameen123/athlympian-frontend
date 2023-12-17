import { AccessibilityNew } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

function BmiMonitor() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <div className=" flex justify-center">
          <Typography variant="h4">BMI</Typography>
          <AccessibilityNew className=" text-yellow-400 text-[2rem] my-auto" />
        </div>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Typography align="center">My BMI</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            20 units
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BmiMonitor;
