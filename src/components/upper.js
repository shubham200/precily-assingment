import React from "react";
import Form from "./form";
import Data from "./dataop";
import Resize from "./resize";

const Upper=()=> {
  const form = <Form/>;
  const data = <Data />;
  return (
    <div className="fluid-container" style={{display:"flex"}} >
    <div >
    <Resize
    width="50vw"
    height="100vh"
    maxWidth
    children={form}
    />
      </div>
      <div >
        <Resize width="48vw" height="100vh" children={data} />
      </div>
    </div>
  );
}

export default Upper;







































































































