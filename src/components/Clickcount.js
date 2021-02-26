import React, { useEffect, useState } from "react";
import Axios from "axios";

import { devUrl } from "../dev.json";

const Clickcount=()=> {
  const [clicks, setClicks] = useState({ Add: 0, Update: 0 });

  useEffect(async () => {
    try {
      await Axios.get(`${devUrl}/readCounts`).then((res) => {
        setClicks(res.data[0]);
      });
    } catch (error) {
      alert("No Internet");
    }
  }, []);
  return (
    <div>
      <div className="heading" style={{ margin: "0.3em", textAlign: "center" }}>
        Click-Count
      </div>
      <div className="title2" style={{ width: "100%", textAlign: "center" }}>
        <label htmlFor="addClicks">Add :</label>
        <label htmlFor="addClicks">&nbsp;&nbsp;{clicks.Add}</label>
      </div>
      <div className="title2" style={{ width: "100%", textAlign: "center" }}>
        <label htmlFor="updateClicks">Update :</label>
        <label htmlFor="updateClicks">&nbsp;&nbsp;{clicks.Update}</label>
      </div>
    </div>
  );
}

export default Clickcount;