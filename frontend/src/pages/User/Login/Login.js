import React from "react";
import Footer from "../../../components/User/Footer/Footer";
import Header from "../../../components/User/Header/Header";
import LoginForm from "../../../components/User/LoginForm/LoginForm";

function Login() {
  return (
    <>
      <Header />
      <div className="mt-3 text-center">
        <h3>Explore Your opportunity Here</h3>
      </div>
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
