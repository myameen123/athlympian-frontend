"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import LoginModal from "@/components/modals/login-modal";
// import RegisterModal from "@/components/modals/signup-modal";
function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const onClickHandler = () => {
    setOpenModal(true);
  };
  const onClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      {/* <RegisterModal onClose={onClose} open={openModal} /> */}
      <LoginModal onClose={onClose} open={openModal} />
      <div className="  h-16 border-b shadow-sm flex items-center p-4 justify-between">
        <div className=" h-full flex items-center pl-2">
          <Image src="/logo.png" width={200} height={100} />
        </div>
        <div className=" ">
          <Button variant="ghost" className="text-lg" onClick={onClickHandler}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
