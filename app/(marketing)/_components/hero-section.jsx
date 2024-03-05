"use client";
import LoginModal from "@/components/modals/login-modal";
import { Button } from "@mui/material";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const [openModal, setOpenModal] = useState(false);
  const onClickHandler = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when entering the viewport
    threshold: 0.2, // Adjust the threshold as needed
  });
  return (
    <div className=" bg-slate-500 z-0">
      <div className="h-screen md:w-[70%] mx-10 flex flex-col items-end justify-center  md:mx-auto">
        <div className=" md:w-[70%] w-full flex flex-col items-start justify-center gap-4">
          <p
            className={`md:text-7xl text-5xl font-bold md:text-right text-gray-900 overflow-hidden ${
              inView ? " animate-from-right" : " opacity-0"
            }`}
            ref={ref}
          >
            BE ACTIVE TOMORROW, ENGAGE TODAY
          </p>
          <Button
            ref={ref}
            variant="outlined"
            className={` text-gray-900 border-gray-900 border-2  mx-auto hover:border-gray-900 hover:border-2 ${
              inView ? " animate-from-left" : " opacity-0"
            }`}
            onClick={onClickHandler}
          >
            <span className="text-lg font-[550]">Get Started</span> <LogIn />
          </Button>
          <LoginModal onClose={onClose} open={openModal} />
        </div>
      </div>
      <div className=" ">
        <video
          src={require("../../../public/video.mp4")}
          autoPlay
          loop
          muted
          className=" absolute top-0 w-full h-full object-cover -z-10 opacity-70"
        />
      </div>
    </div>
  );
}

export default HeroSection;
