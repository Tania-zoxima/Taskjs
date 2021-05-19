import React, { useState } from "react"
// import "./Product.css"
import { Link, useParams } from "react-router-dom"
import AddCart from './AddCart';
import bag from "./Images/bag.png"
import pen from "./Images/pen.png"
import stand from "./Images/stand.png"
import copy from "./Images/copy.png"
import UpdatedComponent from './Counter';
import AddToCart from "./Conditions";
import { addToBasket } from "./redux/action/cartActions";
import { useDispatch } from "react-redux";

const Product = (props) => {
    let { id } = useParams()
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            {id == "bag" &&
                <div ><img src={bag} style={{ display: "flex", height: "300px", marginLeft: "180px" }} />
                    <h2 style={{ marginTop: "15px" }}>Skybags Bingo 02 32 Ltrs Grey Casual Backpack (Bingo 02)</h2>
                    <h3 style={{ marginLeft: "270px", marginTop: "20px" }}>Price-Rs.500</h3>
                    <div style={{ marginLeft: "310px", marginTop: "20px" }}>
                        <button onClick={props.decrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold" }} >-</button>
                        <label>{props.count}</label>
                        <button onClick={props.incrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold" }} >+</button>
                    </div>
                    <button style={{ marginLeft: "280px", marginTop: "20px", fontSize: "20px" }} onClick={()=>dispatch(addToBasket(bag))} >Add to Cart</button>
                    <AddCart open={isOpen} onClose={() => setIsOpen(false)} />
                </div>}
            {id == "pen" && <div><img src={pen} style={{ display: "flex", height: "300px", marginLeft: "300px" }} />
                <h2 style={{ marginTop: "15px" }}>Cello Papersoft Ball Pen | Premium ball pens | Professional pen with superior writing experience</h2>
                <h3 style={{ marginLeft: "480px", marginTop: "20px" }}>Price-Rs.10</h3>
                <div style={{ marginLeft: "310px", marginTop: "15px" }}>
                    <button onClick={props.decrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold", marginLeft: "195px" }} >-</button>
                    <label>{props.count}</label>
                    <button onClick={props.incrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold" }} >+</button>
                </div>
                <button style={{ marginLeft: "480px", marginTop: "20px", fontSize: "20px" }} onClick={() => dispatch(addToBasket(copy))}>Add to Cart</button>
                <AddCart open={isOpen} onClose={() => setIsOpen(false)} />
            </div>}
            {id == "copy" && <div><img src={copy} style={{ display: "flex", height: "300px", marginLeft: "300px" }} />
                <h2 style={{ marginTop: "15px" }}>Classmate 2100117 Soft Cover Pack of 7 Spiral Binding Notebook, Single Line, 300 Pages</h2>
                <h3 style={{ marginLeft: "390px", marginTop: "20px" }}>Price-Rs.1200</h3>
                <div style={{ marginLeft: "430px", marginTop: "15px" }}>
                    <button onClick={props.decrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold" }} >-</button>
                    <label>{props.count}</label>
                    <button onClick={props.incrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold" }} >+</button>
                </div>
                <button style={{ marginLeft: "400px", marginTop: "20px", fontSize: "20px" }} onClick={() =>dispatch(addToBasket(pen))} >Add to Cart</button>
                <AddCart open={isOpen} onClose={() => setIsOpen(false)} /></div>}
            {id == "stand" && <div><img src={stand} style={{ display: "flex", height: "300px", marginLeft: "100px" }} />
                <h2 style={{ marginTop: "15px" }}>Callas 360 degree Rotating Pen Stand Black</h2>
                <h3 style={{ marginLeft: "200px", marginTop: "20px" }}>Price-Rs.200</h3>
                <div style={{ marginLeft: "240px", marginTop: "15px" }}>
                    <button onClick={props.decrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold" }} >-</button>
                    <label>{props.count}</label>
                    <button onClick={props.incrementCount} style={{ fontSize: "15px", width: "20px", fontWeight: "bold" }} >+</button>
                </div>
                <Link to="/cart"> <button style={{ marginLeft: "210px", marginTop: "20px", fontSize: "20px" }} onClick={() => dispatch(addToBasket(stand))}>Add to Cart</button></Link>
                <AddCart open={isOpen} onClose={() => setIsOpen(false)} /></div>}



        </div>
    )
}

export default UpdatedComponent(Product)