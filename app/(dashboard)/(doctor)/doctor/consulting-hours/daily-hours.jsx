"use client";
// import { makeStyles } from "@mui/styles";
// DailyHours.jsx
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import TimeInput from "./time-input";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function DailyHours({ Values }) {
  const [timeInputs, setTimeInputs] = useState(Values);

  const handleInputChange = (day, field, value) => {
    setTimeInputs((prevInputs) => ({
      ...prevInputs,
      [day]: {
        ...prevInputs[day],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log("All inputs:", timeInputs);
    // You can perform additional actions with the input data here
  };

  return (
    <Box>
      <Grid container spacing={2} marginBottom={2} sm={12}>
        {DAYS.map((day) => (
          <TimeInput
            key={day}
            day={day}
            initialStartTime={timeInputs[day].startTime}
            initialEndTime={timeInputs[day].endTime}
            onChange={(field, value) => handleInputChange(day, field, value)}
          />
        ))}
      </Grid>
      <Button onClick={handleSave}>Save</Button>
    </Box>
  );
}

export default DailyHours;
