"use client";
import React, { use, useEffect, useState } from "react";
import ModalLayout from "./ModalLayout/modal-layout";
import { Grid, Typography } from "@mui/material";
import CustomTextField from "../inputs/TextField";
import { Button } from "../ui/button";
import Image from "next/image";
import isEmail from "validator/lib/isemail";
import LoginModal from "./login-modal";
function RegisterModal({ onClose, open }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // const [isError, setIsError] = useState(false)

  const formValidation = () => {
    if (
      isEmail(email) &&
      password.length > 7 &&
      firstName.length > 2 &&
      lastName.length > 0 &&
      password === confirmPassword
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  useEffect(() => {
    formValidation();
  }, [email, password, lastName, firstName, confirmPassword]);
  const onSubmitHandler = () => {
    const body = {
      email,
      password,
      firstName,
      lastName,
    };
    console.log(body);
  };
  const handleClose = () => {
    onClose();
  };
  const onLoginClick = () => {
    onClose();
    setShowLoginModal(true);
  };
  const onLoginClose = () => {
    setShowLoginModal(false);
  };
  return (
    <>
      <LoginModal open={showLoginModal} onClose={onLoginClose} />
      <ModalLayout
        onClose={handleClose}
        open={open}
        width="500px"
        height="600px"
      >
        <div>
          <Image src="/logo.png" width={150} height={150} />
        </div>
        <div className=" w-full flex justify-center my-4">
          <Typography variant="h4">Register</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomTextField
              placeholder="name"
              size="small"
              label="First Name"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              size="small"
              label="Last Name"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              size="small"
              type="email"
              label="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              size="small"
              label="Password"
              type="password"
              required
              value={password}
              minLength={8}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              size="small"
              password={password}
              label="Confirm Password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {isValid ? (
              <Button onClick={onSubmitHandler}>Register</Button>
            ) : (
              <Button disabled>Register</Button>
            )}
          </Grid>
        </Grid>
        <div className=" flex mt-8 gap-2">
          <p className="">Already have account?</p>{" "}
          <span
            type="button"
            className=" cursor-pointer text-blue-500"
            onClick={onLoginClick}
          >
            login
          </span>
        </div>
      </ModalLayout>
    </>
  );
}

export default RegisterModal;
