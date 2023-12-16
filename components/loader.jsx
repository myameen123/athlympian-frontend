import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div className="w-full h-full z-50 bg-slate-400/20 flex justify-center items-center absolute bottom-0 right-0">
      <CircularProgress sx={{ color: "#D5FE63" }} />
    </div>
  );
}

export default Loader;
