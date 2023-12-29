"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal";

function DocotrCard({ doctor }) {
  const [openModal, setOpenModal] = useState(false);
  const onCloseModal = () => {
    setOpenModal(false);
  };
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const sp = [];
  doctor.specialities.map((s) => {
    const SpecialityName = s
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    sp.push(SpecialityName);
  });

  let link = doctor.doctorName.toLowerCase().replace(/\./g, "");
  link = link.replace(/\s+/g, "-");

  const specialites = sp.join(", ");
  return (
    <div>
      <AppointmentModal onClose={onCloseModal} open={openModal} />
      <Card>
        <CardContent>
          <div className=" flex w-full">
            <div className=" flex gap-4 w-[65%] px-2">
              <div className=" w-[15%]">
                <div className=" w-24 h-24 rounded-full border overflow-hidden ">
                  <Image
                    src="/avatar.png"
                    width={600}
                    height={600}
                    alt="doctor image"
                  />
                </div>
              </div>
              <div className=" w-[85%] flex flex-col gap-2">
                <Link href={link} className=" text-purple-950 underline">
                  {doctor.doctorName}
                </Link>
                <Typography variant="p" fontSize={14}>
                  {specialites}
                </Typography>
                <div className=" bg-yellow flex justify-between mt-2">
                  <div className=" flex flex-col items-center">
                    <span>Reviews</span>
                    <span className=" text-yellow-400 font-bold">200</span>
                  </div>
                  <div className=" flex flex-col items-center">
                    <span>Experience</span>
                    <span className=" font-bold">28 Yrs</span>
                  </div>
                  <div className=" flex flex-col items-center">
                    <span>Satifaction</span>
                    <span className=" font-bold">99%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="  w-[35%]  flex flex-col items-end">
              <div className=" md:w-[70%]  flex flex-col gap-3">
                <Button
                  aria-controls="radix-:R1mcq:"
                  className="bg-[#CCFF3F] text-black hover:bg-[#CCFF3F]"
                  onClick={onOpenModal}
                >
                  Video Call
                </Button>
                <Button
                  aria-controls="radix-:R1mcq:"
                  className="bg-[#282930]"
                  onClick={onOpenModal}
                >
                  View Timings
                </Button>
              </div>
            </div>
          </div>
          <div className="  w-[65%] flex gap-2 p-2 mt-2">
            <div className=" border border-green-400 p-4 rounded-lg flex flex-col gap-2">
              <Typography variant="p" fontSize={15}>
                Video Consultation
              </Typography>
              <Typography variant="p" fontSize={15}>
                Available Today
              </Typography>
            </div>
            <div className=" border border-green-400 p-4 rounded-lg flex flex-col gap-2">
              <Typography variant="p" fontSize={15}>
                Islamabad Sports center, Islamabad, Blue Area G-7, Islamabad
              </Typography>
              <Typography variant="p" fontSize={15}>
                Available Today
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DocotrCard;
