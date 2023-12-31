"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AthleteDetailsModal from "./appoinments/_component/AthleteDetailsModal";

const appointments = [
  {
    id: 1,
    athleteName: "John Doe",
    date: "2024-01-04",
    mode: "physical",
    time: "10:00 AM",
  },
  {
    id: 2,
    athleteName: "Jane Doe",
    date: "2024-01-05",
    mode: "physical",
    time: "2:00 PM",
  },
  {
    id: 3,
    athleteName: "Alice Johnson",
    date: "2024-01-06",
    mode: "online",
    time: "3:30 PM",
  },
  {
    id: 4,
    athleteName: "Bob Smith",
    date: "2024-01-07",
    mode: "physical",
    time: "11:15 AM",
  },
  {
    id: 5,
    athleteName: "Eva Rodriguez",
    date: "2024-01-04",
    mode: "online",
    time: "9:45 AM",
  },
  {
    id: 6,
    athleteName: "Mike Williams",
    date: "2024-01-05",
    mode: "physical",
    time: "4:30 PM",
  },
  {
    id: 7,
    athleteName: "Sophie Brown",
    date: "2024-01-06",
    mode: "online",
    time: "1:00 PM",
  },
  {
    id: 8,
    athleteName: "Alex Turner",
    date: "2024-01-07",
    mode: "physical",
    time: "10:45 AM",
  },
  {
    id: 9,
    athleteName: "Olivia White",
    date: "2024-01-04",
    mode: "online",
    time: "2:45 PM",
  },
  {
    id: 10,
    athleteName: "Daniel Miller",
    date: "2024-01-05",
    mode: "physical",
    time: "12:30 PM",
  },
];

const calculateTimeDifference = (date1, date2) => {
  const timeDifference = Math.abs(date1.getTime() - date2.getTime());
  return timeDifference;
};

// Function to get the three most nearer appointments
const getThreeNearestAppointments = (appointments) => {
  const currentDate = new Date();

  // Calculate the time differences for each appointment
  const appointmentsWithTimeDifference = appointments.map((appointment) => ({
    ...appointment,
    timeDifference: calculateTimeDifference(
      currentDate,
      new Date(appointment.date + " " + appointment.time)
    ),
  }));

  // Sort appointments by time difference
  appointmentsWithTimeDifference.sort(
    (a, b) => a.timeDifference - b.timeDifference
  );

  // Get the three nearest appointments
  const threeNearestAppointments = appointmentsWithTimeDifference.slice(0, 3);

  return threeNearestAppointments;
};

// Usage
const threeNearestAppointments = getThreeNearestAppointments(appointments);
const Dashboard = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {selectedAppointment && (
        <AthleteDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          appointment={selectedAppointment}
        />
      )}
      <div className=" w-full flex justify-center p-8">
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Most Nearer Appoinments
                </Typography>
                <Paper elevation={3}>
                  <List>
                    {threeNearestAppointments.map((appointment, index) => (
                      <ListItem
                        key={index}
                        button
                        onClick={() => handleSelectAppointment(appointment)}
                      >
                        <ListItemText
                          primary={appointment.athleteName}
                          secondary={`Date: ${appointment.date} | Time: ${appointment.time}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
