import React from "react";
import ReactDOM from "react-dom";

function AddCart({ open, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div style={{position: "fixed",top: "12%",left: "85%",transform: "translate(-50%, -50%)",backgroundColor: "#FBD1D2",padding: "10px",zIndex: 1000,height: "25px",width:"250px",borderRadius:"10px"}}>
        <div style={{display:"flex"}}>
          <h3>Add to cart successfully</h3>
          <button style={{ marginLeft: "25px",height:"15px",width:"15px",backgroundColor:"#FBD1D2",border:"1px solid black",borderRadius:"10px"}} onClick={onClose}>
            <p style={{marginLeft:"-1px",marginTop:"-1px"}}>X</p>
          </button>
        </div>
      </div>


    </div>,
    document.getElementById("portal")
  );
}

export default AddCart;