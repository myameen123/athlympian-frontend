"use client";
import React, { useCallback, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@/components/ui/button";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import CustomTextField from "@/components/inputs/TextField";

const VideoCallModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState();
  const router = useRouter();
  const handleJoinRoom = useCallback(() => {
    router.push(`/doctor/video-call/room/${value}`);
  }, [value]);
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle align="center" fontWeight="bold">
        Join Room
      </DialogTitle>
      <DialogContent align="center">
        <Grid container spacing={2} alignItems="center" marginY={2}>
          <Grid item xs={12}>
            <CustomTextField
              label="Room Code"
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button color="primary" onClick={handleJoinRoom}>
              Create Room
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default VideoCallModal;
