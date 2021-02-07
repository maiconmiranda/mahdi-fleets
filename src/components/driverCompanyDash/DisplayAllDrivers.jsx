import React, { useState, useEffect } from "react";
import { CardColumns, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { GetUser } from "../main/getUser";

const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white",
};

export function DisplayAllDrivers(props) {
  const user = GetUser();
  const id = user.company_id;
  console.log(id);
  const [users, setUsers] = useState([]);

  function fetchDrivers() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((users) => {
        const companyUsers = users.filter(
          (user) => user.company_id === id && user.is_admin === false
        );
        // console.log(companyUsers);
        setUsers(companyUsers);
      });
  }

  useEffect(() => {
    fetchDrivers();
  }, [id]);

  

  return (
    <CardColumns style={{ marginTop: "50px" }}>
      <h3>View Driver</h3>
      {users.map((user) => {
        const userId = user.id
        const driver = user
        return (
        <Card className="card card-body h-100">
          <div classname="col-sm-4 py-2">
            <Card.Body>
              <Card.Title>Driver Name : {user.user_name}</Card.Title>
              <Card.Text>
                <p>Email: {user.email}</p>
                <p>Driver ID: {user.driver_id}</p>
                <p>License Number: {user.driver_license_number}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={CardFooterStyle}>
              <Link to={{pathname:"/view-driver", data: driver}}>
                <Button variant="success">View</Button>
              </Link>
            </Card.Footer>
          </div>
        </Card>
        )
      })}
    </CardColumns>
  );
}
