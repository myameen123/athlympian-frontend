import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Sidebar from "./sidebar";

function ProfileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className=" md:hidden pr-4 hover:opacity-75 tranistion">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export default ProfileSidebar;
