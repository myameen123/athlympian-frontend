import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function DoctorSpeciality({ speciality, number }) {
  const SpecialityName = speciality
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <Grid item xs={6}>
      <div className=" w-full shadow-sm p-3 border rounded-md ">
        <Link
          href={`/athlete/doctors/${speciality}`}
          className="  text-purple-950 flex flex-col"
        >
          <span className="underline">{SpecialityName}</span>
          <Typography>{number} Doctors Available</Typography>
        </Link>
      </div>
    </Grid>
  );
}

export default DoctorSpeciality;
