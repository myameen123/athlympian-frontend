// TimeInput.jsx
import CustomTextField from "@/components/inputs/TextField";
import { Grid, Typography } from "@mui/material";
import React from "react";

function TimeInput({ day, onChange, initialStartTime, initialEndTime }) {
  const handleFieldChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <Grid item container spacing={1} sm={12}>
      <Grid item sm={12}>
        <Typography fontWeight="bold" align="center" variant="h6">
          {day}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          label="Start-time"
          placeholder="Enter Time 09:00"
          value={initialStartTime}
          size="small"
          onChange={(e) => handleFieldChange("startTime", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          label="End-time"
          placeholder="Enter Time 20:00"
          value={initialEndTime}
          size="small"
          onChange={(e) => handleFieldChange("endTime", e.target.value)}
        />
      </Grid>
    </Grid>
  );
}

export default TimeInput;
