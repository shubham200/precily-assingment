import React, { useEffect, useState } from "react";
import Axios from "axios";

import "../App.css";
import { devUrl } from "../dev.json";

const Form = () => {
  const [Details, setDetails] = useState({
    firstName: "",
    lastName: "",
  });
  const [clicks, setClicks] = useState({});

  const [error, setError] = useState("");

  const addClient = async () => {
    setClicks((prevState) => ({
      ...prevState,
      Add: prevState.Add + 1,
    }));
    console.log(Details)
    try {
      console.log(`${devUrl}/add`)
      await Axios.post(`${devUrl}/add`, Details);
      window.location.reload(false);
    } catch (error) {
      alert("Wrong Details");
    }
  };

  const updateClient = async () => {
    setClicks((prevState) => ({
      ...prevState,
      Update: prevState.Update+ 1,
    }));
    try {
      await Axios.patch(`${devUrl}/update`, Details);
      window.location.reload(false);
    } catch (error) {
      console.log("Check your network", Details, error);
    }
  };

  useEffect(async() => {
    // alert(`${devUrl}/getDetails`)
    try {
      await Axios.get(`${devUrl}/getDetails`).then((res) => {
        setDetails(res.data[0]);
      });
      await Axios.get(`${devUrl}/readCounts`).then((res) => {
        setClicks(res.data[0]);
      });
    } catch (error) {
        console.log("check network")    }
  }, []);

  useEffect(async () => {
    try {
      await Axios.patch(`${devUrl}/updateCount`, clicks);
    } catch (error) {
      alert("Check network Connection");
    }
  }, [clicks]);

  return (
    <div className="formContainer">
      <div className="heading">Details</div>
      <div>
        <label htmlFor="name" className="labels">
          First Name :
        </label>
        <input
          type="text"
          value={Details.firstName}
          placeholder=""
          className="input-field"
          onChange={(e) =>
            setDetails((prevState) => ({
              ...prevState,
              firstName: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <label htmlFor="carName" className="labels">
          Last Name :
        </label>
        <input
          type="text"
          value={Details.lastName}
          placeholder=""
          className="input-field"
          onChange={(e) =>
            setDetails((prevState) => ({
              ...prevState,
              lastName: e.target.value,
            }))
          }
        />
      </div>

      <div className="btn-container">
        <button
          className="btn"
          style={{ backgroundColor: "lightblue", marginRight: "0.5rem" }}
          onClick={addClient}
        >
          Add
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "lightblue" }}
          onClick={updateClient}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Form;
