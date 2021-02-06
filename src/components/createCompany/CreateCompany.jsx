import React from "react";
import { Wrap } from "../signUp/SignUpStyle";
import { CompanyForm } from "./CompanyForm";
import { HomeNavBar } from "../homeNavBar/HomeNavBar";
import { Footer } from "../footer/Footer";

export function CreateCompany() {
  return (
    <>
      <Wrap style={{ height: "100%" }}>
        <HomeNavBar />
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontFamily: "sans-serif",
            fontSize: "35px",
          }}
        >
          Add your Company Details
        </h1>
        <CompanyForm />
      </Wrap>
      <Footer />
    </>
  );
}
