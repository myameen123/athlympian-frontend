"use client";
import React, { useEffect, useState } from "react";
import ModalLayout from "./ModalLayout/modal-layout";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import CustomTextField from "../inputs/TextField";
import { Button } from "../ui/button";
import Image from "next/image";
import RegisterModal from "./signup-modal";
import isEmail from "validator/lib/isemail";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/login-slice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "../loader";

function LoginModal({ onClose, open }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  const { loading, user, isAuthenticated, error } = useSelector(
    (state) => state.userLogin
  );
  useEffect(() => {
    if (loading) {
      toast.loading("Loading");
      console.log("loading...");
    }
    if (isAuthenticated) {
      if (user.user.userType === "athlete") {
        router.push("/athlete");
      } else if (user.user.userType === "medico") {
        router.push("/doctor");
      }
    }
    if (error) {
      toast.error(error.msg || error);
      // console.log("this is an error", error.msg);
    }
  }, [dispatch, error, isAuthenticated]);

  const handleClose = () => {
    onClose();
  };
  const onRegisterClick = () => {
    onClose();
    setShowRegisterModal(true);
  };
  const onRegisterClose = () => {
    setShowRegisterModal(false);
  };

  const formValidation = () => {
    if (isEmail(email) && password.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  useEffect(() => {
    formValidation();
  }, [email, password]);

  const onSubmitHandler = () => {
    const body = {
      email,
      password,
    };
    console.log(body);
    dispatch(loginUser(body));
  };
  return (
    <>
      {showRegisterModal && (
        <RegisterModal onClose={onRegisterClose} open={showRegisterModal} />
      )}
      <ModalLayout onClose={handleClose} open={open} width="450px">
        {loading && <Loader />}
        <div>
          <Image src="/logo.png" width={200} height={200} alt="logo" />
        </div>
        <div className=" w-full flex justify-center my-8">
          <Typography variant="h4">Login</Typography>
        </div>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <CustomTextField
              type="email"
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
            {isValid ? (
              <Button onClick={onSubmitHandler}>Login</Button>
            ) : (
              <Button disabled>Login</Button>
            )}
          </Grid>
        </Grid>
        <div className=" flex mt-8 gap-2">
          <p className="">Don't have account?</p>{" "}
          <span
            type="button"
            className=" cursor-pointer text-blue-500"
            onClick={onRegisterClick}
          >
            register
          </span>
        </div>
      </ModalLayout>
    </>
  );
}

export default LoginModal;
