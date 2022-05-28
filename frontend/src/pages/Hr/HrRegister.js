import React from "react";
import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";
import HrRegistration from "../../components/Hr/HrRegistraion/HrRegistration";

function HrRegister() {
  return (
    <>
      <Header />
      <div>
        <HrRegistration />
      </div>
      <Footer />
    </>
  );
}

export default HrRegister;
