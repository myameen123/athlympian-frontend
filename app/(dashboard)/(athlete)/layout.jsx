"use client";
import { useSelector } from "react-redux";
import Navbar from "../_components/navbar";
import Sidebar from "../_components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AthleteLayout = ({ children }) => {
  const userType = useSelector((state) => state.userLogin.user.user?.userType);
  const router = useRouter();

  useEffect(() => {
    if (userType !== "athlete") {
      router.push("/");
    }
  }, [router, userType]);
  return (
    <div className=" h-full ">
      <div className=" md:pl-56 h-[80px] w-full inset-y-0 ">
        <Navbar />
      </div>
      <div className=" h-full hidden md:flex  flex-col fixed inset-y-0 z-50 w-56">
        <Sidebar />
      </div>
      <main className=" md:pl-56 h-full ">{children}</main>
    </div>
  );
};
export default AthleteLayout;
