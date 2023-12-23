"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/modals/login-modal";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  const onClickHandler = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setNavbarBackground("bg-slate-100 shadow-sm");
      } else {
        setNavbarBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-20 flex items-center p-4 justify-between ${navbarBackground} transition-all ease-in-out duration-300 z-10 `}
    >
      <Image src="/logo.png" width={200} height={100} />
      <Button variant="outline" className="text-lg" onClick={onClickHandler}>
        Login
      </Button>
      <LoginModal onClose={onClose} open={openModal} />
    </div>
  );
}
export default Navbar;
