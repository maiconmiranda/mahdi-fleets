// import { useState, useEffect } from "react";
// import { GetUser } from "../main/GetUser";

// export function GetCompany() {
//   const [company, setCompany] = useState([]);

//   const { id } = GetUser();

//   const companyFetch = fetch(
//     `${process.env.REACT_APP_BACKEND_URL}/company/${id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     }
//   )
//   .then((res) => res.json())
//   .then((body) => setCompany(body));


// companyFetch();

// return (
  
//   {company}

//   )
// }

