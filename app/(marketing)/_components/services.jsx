"use client";
import { Paper, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import React from "react";
import ServiceCard from "./service-card";
import { Activity, PersonStanding, Stethoscope } from "lucide-react";
const SERCIES = [
  {
    id: "1",
    icon: Activity,
    text: "fitness Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque nobis possimus amet quis modi porro. Illo quam enim deleniti saepe.",
  },
  {
    id: "2",
    icon: Stethoscope,
    text: "Medicen Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque nobis possimus amet quis modi porro. Illo quam enim",
  },
  {
    id: "2",
    icon: PersonStanding,
    text: "Coaching Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque nobis possimus amet quis modi porro. Illo quam enim",
  },
];
function Services() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when entering the viewport
    threshold: 0.2, // Adjust the threshold as needed
  });
  return (
    <div className="w-full md:px-20 px-6 flex flex-col items-center mt-4 mb-8">
      {/* Header */}
      <div
        className={`flex flex-col items-center md:w-[60%] my-6 ${
          inView ? "animate-from-bottom" : " opacity-0"
        }`}
        ref={ref}
      >
        <Typography variant="h3" color="#D5FE63">
          Services
        </Typography>
        <Typography variant="p" align="center" fontSize={16}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque
          nobis possimus amet quis modi porro. Illo quam enim deleniti saepe,
          tempora esse fugiat! Placeat harum quidem ratione labore ab.
        </Typography>
      </div>
      {/* Services */}
      <Grid container className=" mt-4" sx={12} spacing={2}>
        {SERCIES.map((s) => (
          <ServiceCard key={s.id} text={s.text} icon={s.icon} />
        ))}
      </Grid>
    </div>
  );
}

export default Services;
