import { Card, Grid } from "@mui/material";
import React from "react";
import RunningCart from "./_components/running-chart";
import SleepChart from "./_components/sleep-chart";
import WaterMonitor from "./_components/WaterMonitor";
import CalorieMonitor from "./_components/CalorieMonitor";
import BmiMonitor from "./_components/BmiMonitor";

function Page() {
  return (
    <div className="p-8  h-screen">
      <Grid container spacing={2}>
        <Grid item container spacing={2} xs={12}>
          <Grid item xs={12} md={6}>
            <Card className="bg-[#FAFAFA] rounded-3xl px-4">
              <RunningCart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="bg-[#FAFAFA] rounded-3xl px-4">
              <SleepChart />
            </Card>
          </Grid>
        </Grid>
        <Grid item container spacing={2} xs={12}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-[#FAFAFA] rounded-3xl p-4 ">
              <WaterMonitor />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-[#FAFAFA] rounded-3xl p-4">
              <CalorieMonitor />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-[#FAFAFA] rounded-3xl p-4">
              <BmiMonitor />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;
