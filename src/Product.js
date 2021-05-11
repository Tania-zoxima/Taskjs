import React from "react"
// import "./Product.css"
import { Link, useParams } from "react-router-dom"

import bag from "./Images/bag.png"
import pen from "./Images/pen.png"
import stand from "./Images/stand.png"
import copy from "./Images/copy.png"

const Product = () => {
    let {id} = useParams()

    return(
        <div className="productDetailsContainer">
            {id=="bag" && 
            <div><img src={bag} /> <p>Hi this is a test product with Lorem Ipsum text we don't care about. Thankyou for shopping with us.</p><Link to="/cart"><button className="addToCartCTA">Add to Cart</button></Link></div> }
            {id=="pen" && <div><img src={pen} /> <p>Hi this is a test product with Lorem Ipsum text we don't care about. Thankyou for shopping with us.</p><Link to="/cart"><button className="addToCartCTA">Add to Cart</button></Link></div> }
            {id=="copy" && <div><img src={copy} /> <p>Hi this is a test product with Lorem Ipsum text we don't care about. Thankyou for shopping with us.</p><Link to="/cart"><button className="addToCartCTA">Add to Cart</button></Link></div> }
            {id=="stand" && <div><img src={stand} /> <p>Hi this is a test product with Lorem Ipsum text we don't care about. Thankyou for shopping with us.</p><Link to="/cart"><button className="addToCartCTA">Add to Cart</button></Link></div> }
            

            
        </div>
    )
}

export default Product