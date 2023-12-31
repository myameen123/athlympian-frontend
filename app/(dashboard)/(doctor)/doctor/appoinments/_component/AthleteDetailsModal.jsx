"use client";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@/components/ui/button";
import { Grid, Typography } from "@mui/material";
import VideoCallModal from "./VideoCalllModal";

const AthleteDetailsModal = ({ isOpen, onClose, appointment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <VideoCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle align="center" fontWeight="bold">
          Athlete Details
        </DialogTitle>
        <DialogContent align="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>
                <span className=" font-bold">Name:</span>{" "}
                {appointment.athleteName}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <span className=" font-bold">Date:</span> {appointment.date}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <span className=" font-bold">Mode:</span> {appointment.mode}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <span className=" font-bold">Time:</span> {appointment.time}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {appointment.mode === "online" && (
                <Button color="primary" onClick={handleOpenModal}>
                  Generate Video Call
                </Button>
              )}
            </Grid>
            <Grid item xs={12}>
              {appointment.mode === "physical" && (
                <Button color="primary">Accept Appointment</Button>
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AthleteDetailsModal;
