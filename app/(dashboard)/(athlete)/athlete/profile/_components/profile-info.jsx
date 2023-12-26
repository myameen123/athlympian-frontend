import CustomTextField from "@/components/inputs/TextField";
import { Grid, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import React from "react";

function ProfileInfo() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} xs={12}>
        <CustomTextField label="First Name" size="small" />
      </Grid>
      <Grid item sm={6} xs={12}>
        <CustomTextField label="Last Name" size="small" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="p">Email</Typography>
        <CustomTextField
          disabled={true}
          size="small"
          value="yameenmuhammad960@gmail.com"
        />
      </Grid>
      <Grid item>
        <Button>Change Email</Button>
      </Grid>
      <Grid item xs={12}>
        <CustomTextField label="CNIC" size="small" />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField label="Address" size="small" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="p">Password</Typography>

        <CustomTextField
          disabled={true}
          type="password"
          size="small"
          value="sddddd"
        />
      </Grid>
      <Grid item sm={12}>
        <Button>Change Password</Button>
      </Grid>
      <Grid item sm={6} xs={12}>
        <CustomTextField label="Sports Name" size="small" />
      </Grid>
      <Grid item sm={6} xs={12}>
        <CustomTextField label="BMI" size="small" />
      </Grid>
      <Grid item>
        <Button>Save</Button>
      </Grid>
    </Grid>
  );
}

export default ProfileInfo;
