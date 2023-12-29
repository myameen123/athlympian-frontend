"use client";
import React, { useState } from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
} from "@mui/material";
import { Button } from "@/components/ui/button";

const getNextWeekDates = () => {
  const today = new Date();
  const nextWeekDates = [];

  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    nextWeekDates.push(nextDay);
  }

  return nextWeekDates;
};

const AppointmentForm = ({ Values }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const nextWeekDates = getNextWeekDates();

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    setSelectedTime("");
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Date:", selectedDay);
    console.log("Selected Time:", selectedTime);
  };

  const getAvailableTimes = () => {
    if (!selectedDay || !Values[selectedDay]) {
      return [];
    }

    const { startTime, endTime } = Values[selectedDay];

    const availableTimes = [];
    let currentTime = startTime;

    while (currentTime < endTime) {
      availableTimes.push(currentTime);
      const [hours, minutes] = currentTime.split(":");
      const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
      const nextTime = totalMinutes + 15;
      currentTime = `${Math.floor(nextTime / 60)
        .toString()
        .padStart(2, "0")}:${(nextTime % 60).toString().padStart(2, "0")}`;
    }

    return availableTimes;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full  flex flex-col gap-4 my-2 p-2"
    >
      <div className=" flex md:flex-row flex-col gap-4 items-center  w-full justify-between">
        <div>
          <FormControl
            sx={{
              width: 250,
            }}
          >
            <InputLabel id="select-day">Select Day</InputLabel>
            <Select
              fullWidth
              labelId="select-day"
              id="select-day"
              label="Select Day"
              size="small"
              value={selectedDay}
              onChange={handleDayChange}
            >
              {nextWeekDates.map((date) => (
                <MenuItem
                  key={date.toISOString()}
                  value={date.toLocaleString("en-US", { weekday: "long" })}
                >
                  {date.toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl
            sx={{
              width: 250,
            }}
          >
            <InputLabel id="select-time">Select Time</InputLabel>
            <Select
              fullWidth
              value={selectedTime}
              onChange={handleTimeChange}
              labelId="select-time"
              id="select-time"
              label="Select Time"
              size="small"
              disabled={!selectedDay}
            >
              {selectedDay &&
                getAvailableTimes().map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className=" w-full">
        <Button
          type="submit"
          onClick={handleSubmit}
          className=" w-full"
          disabled={!selectedDay || !selectedTime}
        >
          Book Appointment
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
