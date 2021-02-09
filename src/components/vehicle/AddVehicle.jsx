import React, { useState } from "react";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Form, Button } from "react-bootstrap";
import { GetUser } from "../main/getUser";
import { useHistory } from 'react-router-dom';


export function AddVehicle() {
  const history = useHistory()
  const [make, setMake] = useState("");
  const [fleetId, setFleetId] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [rego, setRego] = useState("");
  const [regoExpiryDate, setRegoExpiryDate] = useState("");
  const [registrationCost, setRegistrationCost] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState("");
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState("");
  const [insuranceCosts, setInsuranceCosts] = useState("");
  const [maintenanceCosts, setMaintenanceCosts] = useState("");

  const getUser = GetUser();
  const userId = getUser.id;
  const companyId = getUser.company_id;
 
  // form is submitted here

  async function onFormSubmit(e) {
    try {
      e.preventDefault();

      // new vehicle is created and saved to database

      await fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          vehicle: {
            company_id: companyId,
            user_id: userId,
            fleet_id: fleetId,
            make: make,
            model: model,
            year: year,
            color: color,
            rego: rego,
            rego_expiry_date: regoExpiryDate,
            registration_fee: registrationCost,
            insurance_provider: insuranceProvider,
            insurance_policy_number: insurancePolicyNumber,
            insurance_expiry_date: insuranceExpiryDate,
            insurance_fee: insuranceCosts,
            maintenance_fee: maintenanceCosts
          },
        }),
      });
      // redirect_to
      history.push("/view-all-vehicles");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <FormWrap>
        <Form onSubmit={onFormSubmit}>
        <Form.Group controlId="formBasicRego">
            <Form.Label htmlFor="companyId">Company Id</Form.Label>
            <Form.Control
              type="text"
              name="company_id"
              id="company_id"
              // placeholder="111-111"
              value={companyId}
              // onChange={(e) => setFleetId(e.target.value)}
            />
          </Form.Group>
        <Form.Group controlId="formBasicRego">
            <Form.Label htmlFor="fleetId">Fleet Id</Form.Label>
            <Form.Control
              type="text"
              name="fleet_id"
              id="fleet_id"
              placeholder="111-111"
              value={fleetId}
              onChange={(e) => setFleetId(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicRego">
            <Form.Label htmlFor="make">Make</Form.Label>
            <Form.Control
              type="text"
              name="make"
              id="make"
              placeholder="Toyota"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicRego">
            <Form.Label htmlFor="model">Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              id="model"
              placeholder="Corola"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicRego">
            <Form.Label htmlFor="year">Year</Form.Label>
            <Form.Control
              type="text"
              name="year"
              id="year"
              placeholder="2010"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicRego">
            <Form.Label htmlFor="color">Color</Form.Label>
            <Form.Control
              type="text"
              name="color"
              id="color"
              placeholder="White"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicRego">
            <Form.Label htmlFor="rego">Rego</Form.Label>
            <Form.Control
              type="text"
              name="rego"
              id="rego"
              placeholder="License Plate"
              value={rego}
              onChange={(e) => setRego(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicRego_expiry_date">
            <Form.Label htmlFor="rego_expiry_date">Rego Expiry Date</Form.Label>
            <Form.Control
              type="date"
              name="rego_expiry_date"
              id="rego_expiry_date"
              placeholder="01/01/2020"
              value={regoExpiryDate}
              onChange={(e) => setRegoExpiryDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicRegistration_cost">
            <Form.Label htmlFor="registration_fee">
              Registration Cost
            </Form.Label>
            <Form.Control
              type="text"
              name="registration_fee"
              id="registration_fee"
              placeholder="$300"
              value={registrationCost}
              onChange={(e) => setRegistrationCost(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicInsurance_provider">
            <Form.Label htmlFor="insurance_provider">
              Insurance Provider
            </Form.Label>
            <Form.Control
              type="text"
              name="insurance_provider"
              id="insurance_provider"
              placeholder="Alianz"
              value={insuranceProvider}
              onChange={(e) => setInsuranceProvider(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicInsurance_policy_number">
            <Form.Label htmlFor="insurance_policy_number">
              Insurance Policy Number
            </Form.Label>
            <Form.Control
              type="text"
              name="insurance_policy_number"
              id="insurance_policy_number"
              placeholder="A202020202020"
              value={insurancePolicyNumber}
              onChange={(e) => setInsurancePolicyNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicinsurance_expiry_date">
            <Form.Label htmlFor="insurance_expiry_date">
              Insurance expiry Date
            </Form.Label>
            <Form.Control
              type="date"
              name="insurance_expiry_date"
              id="insurance_expiry_date"
              placeholder="01/01/2020"
              value={insuranceExpiryDate}
              onChange={(e) => setInsuranceExpiryDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicInsurance_costs">
            <Form.Label htmlFor="Insurance_fee">Insurance Costs</Form.Label>
            <Form.Control
              type="text"
              name="insurance_fee"
              id="insurance_fee"
              placeholder="$1200"
              value={insuranceCosts}
              onChange={(e) => setInsuranceCosts(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicInsurance_costs">
            <Form.Label htmlFor="maintenance_fee">Maintenance Costs</Form.Label>
            <Form.Control
              type="text"
              name="maintenance_fee"
              id="maintenance_fee"
              placeholder="$1200"
              value={maintenanceCosts}
              onChange={(e) => setMaintenanceCosts(e.target.value)}
            />
          </Form.Group>
          <ButtonWrap>
            
              <Button
                variant="primary"
                size="lg"
                id="submit"
                type="submit"
                value="Submit"
              >
                Submit
              </Button>
            
          </ButtonWrap>
        </Form>
      </FormWrap>
    </>
  );
}
