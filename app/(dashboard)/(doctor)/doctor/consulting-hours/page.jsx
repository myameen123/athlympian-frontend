import { Typography } from "@mui/material";
import PhysicalHours from "./daily-hours";
import DailyHours from "./daily-hours";
const Values = {
  Monday: {
    startTime: "09:00",
    endTime: "17:00",
  },
  Tuesday: {
    startTime: "09:00",
    endTime: "17:00",
  },
  Wednesday: {
    startTime: "09:00",
    endTime: "17:00",
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
    startTime: "09:00",
    endTime: "17:00",
  },
  Sunday: {
    startTime: "09:00",
    endTime: "17:00",
  },
};
function ConsultingHour() {
  return (
    <div className=" w-full  p-4 pb-8">
      <div className=" w-full md:w-[60%] shadow-sm mx-auto flex flex-col items-center gap-4 sm:px-4">
        <Typography variant="h4">Physical Hours</Typography>
        <DailyHours Values={Values} />
        <Typography variant="h4">Online Hours</Typography>
        <DailyHours Values={Values} />
      </div>
    </div>
  );
}

export default ConsultingHour;
