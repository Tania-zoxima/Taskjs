import React from "react";
import ReactDOM from "react-dom";

function AddToCart({open,onClose}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)",backgroundColor:"#f2ab85",padding: "10px",zIndex: 1000,height: "100px",width:"376px",borderRadius:"25px",borderTopRightRadius:"25px",borderBottomRightRadius:"25px"}}>
        <div style={{display:"flex"}}>
          <p style={{fontSize:"20px",fontWeight:"500",textAlign:"center",marginTop:"8px",marginLeft:"8px"}}>Disclaimer: Pricing and Delivery Date on any product as is reflected on the Platform may due to Covid-19.</p>
          <button style={{ marginLeft: "25px",height:"15px",width:"15px",border:"1px solid #f2ab85",borderRadius:"10px"}} onClick={onClose}>
            <p style={{marginLeft:"-4px",marginTop:"-2px",backgroundColor:"#f2ab85"}}>X</p>
          </button>
        </div>
      </div>


    </div>,
    document.getElementById("condition")
  );
}

export default AddToCart;