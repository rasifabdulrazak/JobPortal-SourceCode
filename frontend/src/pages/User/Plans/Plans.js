import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PremiumPlans from "../../../components/User/PremiumPlans/PremiumPlans";
import Header from "../../../components/User/Header/Header";
import Footer from "../../../components/User/Footer/Footer";

function Plans() {
  return (
    <>
      <Header />
      <PremiumPlans />
      <Footer />
    </>
  );
}

export default Plans;
