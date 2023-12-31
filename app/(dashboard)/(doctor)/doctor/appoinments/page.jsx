"use client";
import React, { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { DataGrid } from "@mui/x-data-grid";
import AthleteDetailsModal from "./_component/AthleteDetailsModal";
import Link from "next/link";
import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

const appointments = [
  {
    id: 1,
    athleteName: "John Doe",
    date: "2024-01-04",
    mode: "online",
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

const Dashboard = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectAppointment = (appointment) => {
    console.log(appointment);
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleReject = (appointment) => {
    // Handle reject logic
    console.log("Reject appointment:", appointment);
  };

  const handleAccept = (appointment) => {
    // Handle accept logic
    handleSelectAppointment(appointment);
    console.log("Accept appointment:", appointment);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const columns = [
    { field: "id", headerName: "ID", flex: 1, hide: true },
    { field: "athleteName", headerName: "Athlete Name", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "mode", headerName: "Mode", flex: 1 },
    { field: "time", headerName: "Time", flex: 1 },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
              className=" rounded-full bg-transparent text-gray-600 hover:bg-transparent hover:text-gray-900"
              onClick={() => {
                handleAccept(params.row);
              }}
            >
              <Edit />
            </Button>
            <Button
              className=" bg-transparent text-red-600 hover:bg-transparent hover:text-red-800"
              onClick={() => {
                handleReject(params.row);
              }}
            >
              <Delete />
            </Button>
          </Fragment>
        );
      },
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              All Appoinments
            </Typography>
            <Paper elevation={3}>
              {/* Use DataGrid to display appointments */}
              <DataGrid
                rows={appointments}
                columns={columns}
                pageSize={5}
                autoHeight
                // onRowClick={(params) => handleSelectAppointment(params.row)}
              />
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      {selectedAppointment && (
        <AthleteDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          appointment={selectedAppointment}
        />
      )}
    </Grid>
  );
};

export default Dashboard;
