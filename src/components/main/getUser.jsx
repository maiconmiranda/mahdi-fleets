import React, { useState, useEffect } from "react";

export function GetUser() {
  const [user, setUser] = useState([]);

  // console.log(user);

  function fetchUser() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/status`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((body) => setUser(body));
  }

  useEffect(() => {
    fetchUser();
  }, []);

  //   const currentUser = user.current_user;
  //   let userInfo = [];
  //   for (let key in currentUser) {
  //     userInfo.push(currentUser[key]);
  //   }
  //   const companyId = userInfo[6];

  return user;
}
