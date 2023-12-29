import ModalLayout from "@/components/modals/ModalLayout/modal-layout";
import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";
const PhysicalValues = {
  Monday: {
    startTime: "09:00",
    endTime: "17:00",
  },
  Tuesday: {
    startTime: "10:00",
    endTime: "15:00",
  },
  Wednesday: {
    startTime: "11:00",
    endTime: "14:00",
  },
  Thursday: {
    startTime: "09:00",
    endTime: "17:00",
  },
  Friday: {
    startTime: "09:00",
    endTime: "17:00",
  },
  Saturday: {
    startTime: "12:00",
    endTime: "20:00",
  },
  Sunday: {
    startTime: "09:00",
    endTime: "17:00",
  },
};
const OnlineValues = {
  Monday: {
    startTime: "18:00",
    endTime: "22:00",
  },
  Tuesday: {
    startTime: "19:00",
    endTime: "22:00",
  },
  Wednesday: {
    startTime: "19:00",
    endTime: "22:00",
  },
  Thursday: {
    startTime: "20:00",
    endTime: "23:00",
  },
  Friday: {
    startTime: "18:00",
    endTime: "22:00",
  },
  Saturday: {
    startTime: "18:00",
    endTime: "23:00",
  },
  Sunday: {
    startTime: "22:00",
    endTime: "23:00",
  },
};
function AppointmentModal({ open, onClose }) {
  const [physicalSelect, setPhysicalSelect] = useState(false);
  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      width="600px"
      sx={{ bgcolor: "black" }}
    >
      <div className=" flex flex-col gap-2 p-2 mt-2">
        <div className=" flex gap-2 items-center">
          <span className=" bg-black text-left text-white rounded-full w-6 h-6 flex items-center justify-center">
            1
          </span>
          <p>Select Hospital/Clinic</p>
        </div>
        <div
          className={`border-2 border-${
            physicalSelect ? "slat-200" : "green-400"
          } md:p-4 p-2 rounded-lg flex flex-col gap-2 cursor-pointer`}
          onClick={() => setPhysicalSelect(false)}
        >
          <p className=" md:text-base  text-xs">Video Consultation</p>
          <p className=" md:text-base  text-xs">Available Today</p>
        </div>
        <div
          className={`border-2 border-${
            physicalSelect ? "green-400" : "slat-200"
          } md:p-4 p-2 rounded-lg flex flex-col gap-2 cursor-pointer`}
          onClick={() => setPhysicalSelect(true)}
        >
          <p className=" md:text-base  text-xs">
            Islamabad Sports center, Islamabad, Blue Area G-7, Islamabad
          </p>
          <p className=" md:text-base  text-xs">Available Today</p>
        </div>
      </div>
      <div className=" flex gap-2 items-center ml-2">
        <span className=" bg-black text-left text-white rounded-full w-6 h-6 flex items-center justify-center my-2">
          2
        </span>
        <p>Select Date & Time</p>
      </div>
      <AppointmentForm
        Values={physicalSelect ? PhysicalValues : OnlineValues}
      />
    </ModalLayout>
  );
}

export default AppointmentModal;
