"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Stethoscope, LayoutList } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { AccessTime, Person } from "@mui/icons-material";
const athleteRoutes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/athlete",
  },
  {
    icon: Person,
    label: "Profile",
    href: "/athlete/profile",
  },
  {
    icon: Stethoscope,
    label: "Doctor",
    href: "/athlete/doctors",
  },
];
const doctorRoutes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/doctor",
  },
  {
    icon: Person,
    label: "Profile",
    href: "/doctor/profile",
  },
  {
    icon: AccessTime,
    label: "Consulting Hours",
    href: "/doctor/consulting-hours",
  },
  {
    icon: LayoutList,
    label: "Appointmets",
    href: "/doctor/appoinments",
  },
];
function SidebarRoutes() {
  const pathname = usePathname();
  const isAthletePage = pathname.includes("/athlete");
  const routes = isAthletePage ? athleteRoutes : doctorRoutes;

  return (
    <div className=" flex flex-col w-full gap-y-2">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}

export default SidebarRoutes;
