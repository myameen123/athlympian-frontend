import React from "react";
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

function Page({ params }) {
  const specialityToFilter = params.speciality;

  const doctorsWithSpeciality = sportsDoctors.filter((doctor) => {
    return doctor.specialities.includes(specialityToFilter);
  });

  return (
    <div>
      {doctorsWithSpeciality.map((s) => (
        <div>{s.doctorName}</div>
      ))}
    </div>
  );
}

export default Page;
