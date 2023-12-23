import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

function MarketingLayout({ children }) {
  return (
    <div className=" w-full h-full">
      <Navbar />
      {/* <div>
      </div> */}
      {children}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default MarketingLayout;
