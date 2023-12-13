"use client";
import React, { useState } from "react";
import ModalLayout from "./ModalLayout/modal-layout";
import { Grid, Typography } from "@mui/material";
import CustomTextField from "../inputs/TextField";
import { Button } from "../ui/button";

function LoginModal({ onClose, open }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => {
    onClose();
  };

  return (
    <ModalLayout onClose={handleClose} open={open} width="450px">
      <div className=" w-full flex justify-center mb-8">
        <Typography variant="h4">Login</Typography>
      </div>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <CustomTextField
            label="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button>Login</Button>
        </Grid>
      </Grid>
      <div className=" flex mt-8 gap-2">
        <p className="">Don't have account?</p>{" "}
        <span type="button" className=" cursor-pointer text-blue-500">
          register
        </span>
      </div>
    </ModalLayout>
  );
}

export default LoginModal;
