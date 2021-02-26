import React from "react";
import Clickcount from "./Clickcount";
import Resize from "./resize";

const Lower=()=> {
  const clickCount = <Clickcount />;
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <Resize width="100%" height="100vh" children={clickCount} />
    </div>
  );
}

export default Lower;