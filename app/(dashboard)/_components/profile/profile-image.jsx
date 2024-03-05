"use client";
import dynamic from "next/dynamic";
import ModalLayout from "@/components/modals/ModalLayout/modal-layout";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const DynamicAvatar = dynamic(() => import("react-avatar-edit"), {
  ssr: false,
});

function ProfileImage() {
  const [openModal, setOpenModal] = useState(false);
  const [img, setImg] = useState("");
  const closeModal = () => {
    setOpenModal(false);
  };
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const onCrop = (i) => {
    setImg(i);
  };
  const onClose = () => {
    closeModal();
  };
  return (
    <div>
      <ModalLayout open={openModal} onClose={closeModal} width="200">
        <DynamicAvatar
          width={280}
          height={250}
          onCrop={onCrop}
          onClose={onClose}
        />
      </ModalLayout>
      {/* <button>Open</button> */}
      <Image
        className=" cursor-pointer"
        src={img || "/avatar.png"}
        alt="img"
        width={150}
        height={150}
        onClick={onOpenModal}
      />
    </div>
  );
}

export default ProfileImage;
