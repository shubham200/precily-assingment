import React from 'react'
import {Resizable} from 're-resizable'

const Resize = (props) => {
    return (
        <div>
        <Resizable
        style={style}
        defaultSize={{
          width: props.width,
          height: props.height,
          resizeRatio: 2,
          maxWidth: "18rem",
          maxHeight: "18rem",
        }}
      >
        <div className="heading">{props.children}</div>
      </Resizable>
        </div>
    )
}




const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem 0.5rem",
    border: "solid 0.5rem black",
    borderRadius: "2rem",
    overflow: "hidden",
  };

export default Resize;
