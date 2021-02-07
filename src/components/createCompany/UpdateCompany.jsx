import React, { useState, useEffect } from "react";
import { Wrap } from "../signUp/SignUpStyle";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Form, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { GetUser } from '../main/getUser';

export function UpdateCompany() {
  let history = useHistory();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [managerName, setManagerName] = useState("");
  const [abn, setAbn] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [website, setWebsite] = useState("");
  const getCompanyId = GetUser();
  const id = getCompanyId.first;


  useEffect(() => {
    // localhost:3000/company/10
    fetch(`${process.env.REACT_APP_BACKEND_URL}/companies/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((company) => {
        setCompanyName(company.company_name)
        setEmail(company.email)
        setManagerName(company.manager_name)
        setAbn(company.abn)
        setStreetAddress(company.street_address)
        setSuburb(company.suburb)
        setState(company.state)
        setContactNumber(company.contact_number)
        setWebsite(company.website)
      });
  }, [id]);

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/companies`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: {
            company_name: companyName,
            email: email,
            manager_name: managerName,
            abn: abn,
            street_address: streetAddress,
            suburb: suburb,
            state: state,
            contact_number: contactNumber,
            website: website,
          },
        }),
      });
      // redirect_to
      history.push("/company",);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <Wrap style={{ height: "100%" }}>


        <FormWrap>
          <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicCompanyName">
              <Form.Label htmlFor="CompanyName">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="CompanyName"
                id="CompanyName"
                // placeholder="maicon co."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label htmlFor="Email">Email</Form.Label>
              <Form.Control
                type="Email"
                name="Email"
                id="Email"
                // placeholder="maicon@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicManagerName">
              <Form.Label htmlFor="ManagerName">Manager Name</Form.Label>
              <Form.Control
                type="text"
                name="ManagerName"
                id="ManagerName"
                // placeholder="Maicon Miranda"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAbn">
              <Form.Label htmlFor="abn">abn</Form.Label>
              <Form.Control
                type="text"
                name="abn"
                id="abn"
                // placeholder="1234567890"
                value={abn}
                onChange={(e) => setAbn(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicStreetAddress">
              <Form.Label htmlFor="StreetAddress">Street Address</Form.Label>
              <Form.Control
                type="text"
                name="StreetAddress"
                id="StreetAddress"
                // placeholder="1 Spencer Street"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSuburb">
              <Form.Label htmlFor="Suburb">Suburb</Form.Label>
              <Form.Control
                type="text"
                name="Suburb"
                id="Suburb"
                // placeholder="Melbourne"
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicState">
              <Form.Label htmlFor="State">State</Form.Label>
              <Form.Control
                type="text"
                name="State"
                id="State"
                // placeholder="Victoria"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSuburb">
              <Form.Label htmlFor="ContactNumber">Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="ContactNumber"
                id="ContactNumber"
                // placeholder="(+61) 111 111 111"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSuburb">
              <Form.Label htmlFor="Website">Website</Form.Label>
              <Form.Control
                type="text"
                name="CWebsite"
                id="CWebsite"
                // placeholder="https://www.maiconco.com.au"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>

            <ButtonWrap>
              <Button
                variant="primary"
                size="lg"
                id="submit"
                type="submit"
                value="submit"
              >
                Submit
            </Button>
            </ButtonWrap>
          </Form>
        </FormWrap>
      </Wrap>
    </>
  );
}
