import React, { useEffect, useState } from "react";
import Axios from "axios";

import { devUrl } from "../dev.json";

const Data = () => {
  const [Details, setDetails] = useState({});

  useEffect(async () => {
    await Axios.get(`${devUrl}/getDetails`)
      .then((res) => {
        setDetails(res.data[0]);
      })
      .catch((e) => {
        alert("some problem occured");
      });
  },[]);

  return (
    <>
      <div className="heading">Details</div>
      <div>
        <label className="title2" htmlFor="name">
          First Name:{" "}
        </label>
        <label className="title2" htmlFor="name">
          {Details.firstName}
        </label>
      </div>

      <div>
        <label className="title2" htmlFor="carName">
          Last Name:{" "}
        </label>
        <label className="title2" htmlFor="carName">
          {Details.lastName}
        </label>
      </div>
    </>
  );
};

export default Data;
