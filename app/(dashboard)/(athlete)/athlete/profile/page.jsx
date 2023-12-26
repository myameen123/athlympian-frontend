import ProfileImage from "@/app/(dashboard)/_components/profile/profile-image";
import React from "react";
import ProfileInfo from "./_components/profile-info";

function ProfilePage() {
  return (
    <div className=" w-full  p-4 pb-8">
      <div className=" w-full md:w-[60%] shadow-sm mx-auto flex flex-col items-center gap-4 sm:px-4">
        <ProfileImage />
        <ProfileInfo />
      </div>
    </div>
  );
}

export default ProfilePage;
