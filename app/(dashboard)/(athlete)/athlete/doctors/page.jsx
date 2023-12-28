// import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import React from "react";
import DoctorSpeciality from "./_components/DoctorSpeciality";
const sportsDoctors = [
  {
    docId: 1,
    doctorName: "Dr. John Smith",
    specialities: ["sports-medicine", "orthopedics", "physical-therapy"],
  },
  {
    docId: 2,
    doctorName: "Dr. Emily Jones",
    specialities: ["sports-medicine", "internal-medicine", "rehabilitation"],
  },
  {
    docId: 3,
    doctorName: "Dr. Michael Davis",
    specialities: ["orthopedics", "sports-medicine", "sports-nutrition"],
  },
  {
    docId: 4,
    doctorName: "Dr. Sarah Miller",
    specialities: ["sports-medicine", "cardiology", "exercise-physiology"],
  },
  {
    docId: 5,
    doctorName: "Dr. Robert White",
    specialities: ["sports-medicine", "physical-therapy", "orthopedics"],
  },
  {
    docId: 6,
    doctorName: "Dr. Jessica Green",
    specialities: ["orthopedics", "sports-medicine", "rehabilitation"],
  },
  {
    docId: 7,
    doctorName: "Dr. Andrew Johnson",
    specialities: ["sports-medicine", "internal-medicine", "sports-psychology"],
  },
  {
    docId: 8,
    doctorName: "Dr. Megan Turner",
    specialities: ["orthopedics", "sports-medicine", "sports-nutrition"],
  },
  {
    docId: 9,
    doctorName: "Dr. Kevin Harris",
    specialities: ["sports-medicine", "physical-therapy", "cardiology"],
  },
  {
    docId: 10,
    doctorName: "Dr. Lisa Robinson",
    specialities: ["sports-medicine", "orthopedics", "rehabilitation"],
  },
  {
    docId: 11,
    doctorName: "Dr. Mark Davis",
    specialities: ["orthopedics", "sports-medicine", "sports-nutrition"],
  },
  {
    docId: 12,
    doctorName: "Dr. Rachel White",
    specialities: ["sports-medicine", "internal-medicine", "physical-therapy"],
  },
  {
    docId: 13,
    doctorName: "Dr. Jonathan Smith",
    specialities: ["orthopedics", "sports-medicine", "cardiology"],
  },
  {
    docId: 14,
    doctorName: "Dr. Laura Turner",
    specialities: ["sports-medicine", "rehabilitation", "sports-psychology"],
  },
  {
    docId: 15,
    doctorName: "Dr. Peter Green",
    specialities: ["sports-medicine", "orthopedics", "exercise-physiology"],
  },
];

function Page() {
  // Extract all specialities from sportsDoctors array along with count
  const specialitiesCount = sportsDoctors.reduce(
    (specialitiesCount, doctor) => {
      doctor.specialities.forEach((speciality) => {
        if (!specialitiesCount[speciality]) {
          specialitiesCount[speciality] = 1;
        } else {
          specialitiesCount[speciality]++;
        }
      });
      return specialitiesCount;
    },
    {}
  );

  // Convert the specialitiesCount object to an array of objects
  const specialitiesArray = Object.entries(specialitiesCount).map(
    ([speciality, numberOfDoctors]) => ({
      speciality,
      numberOfDoctors,
    })
  );

  console.log("Specialities Count:");

  return (
    <div className=" w-full  h-full p-4 flex flex-col gap-5">
      <div className=" w-4/5 shadow-md rounded-md mx-auto p-4">
        <Typography variant="h7" fontWeight={600}>
          Find The Best Doctor For You
        </Typography>
      </div>
      <div className=" w-4/5 shadow-md rounded-md mx-auto px-3 py-4 flex flex-col gap-4">
        <Typography fontSize={13} fontWeight={600}>
          Doctors of Different Specialities
        </Typography>
        <Grid container spacing={2}>
          {specialitiesArray.map((s) => (
            <DoctorSpeciality
              key={s}
              speciality={s.speciality}
              number={s.numberOfDoctors}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Page;
