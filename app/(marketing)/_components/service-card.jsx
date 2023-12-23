"user client";
import { Card, Grid, CardHeader, CardContent, Typography } from "@mui/material";

import React from "react";
import { useInView } from "react-intersection-observer";
function ServiceCard({ text, icon }) {
  const Icon = icon;
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when entering the viewport
    threshold: 0.3, // Adjust the threshold as needed
  });
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      ref={ref}
      className={`${inView ? " animate-from-up" : " opacity-0"}`}
    >
      <Card className=" bg-slate-50">
        <CardContent>
          <Icon size="4rem" color="#D5FE63" />
          <Typography variant="p">{text}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ServiceCard;
