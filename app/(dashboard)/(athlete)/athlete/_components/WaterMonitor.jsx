import { WaterDrop } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

function WaterMonitor() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Water <WaterDrop fontSize="2rem" color="primary" />
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

export default WaterMonitor;
