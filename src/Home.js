import React, { useState } from 'react'
import { Link } from "react-router-dom";
import bag from "./Images/bag.png"
import copy from "./Images/copy.png"
import pen from "./Images/pen.png"
import stand from "./Images/stand.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from './slider1.jpg';
import Img1 from './slider2.jpg';
import './Home.css';
import Footer from './Footer/Footer';
import Conditions from './Conditions'

// const products = [
//     {
//         "image": { bag }
//     },
//     {
//         "image": { copy }
//     },
//     {
//         "image": { pen }
//     },
//     {
//         "image": { stand }
//     }
// ]

const Home = (s) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [isOpen, setIsOpen] = useState(true);
    (() => {
        console.log("IIFE workingg");
    })();
    return (
        <div>
            <div style={{ marginBottom: "30px", marginRight: "25px", marginLeft: "25px" }}>
                <Slider {...settings}>
                    <div style={{ height: "max-content", padding: "0px" }}>
                        <img
                            src={Img}
                            style={{ width: "100%", }}
                            alt="no img"
                        />
                    </div>
                    <div style={{ height: "max-content" }}>
                        <img
                            src={Img1}
                            style={{ width: "100%", padding: "0px" }}
                            alt="no img"
                        />
                    </div>
                </Slider>
            </div>


            {/* <div className="productContainer">
                {products.map((item) => {
                    console.log(item);
                    <img src={item.image} />
                })} */}
                <div className="productContainer">
                <div style={{ border: "3px solid black", width: "200px", marginLeft: "130px", marginBottom: "30px" }}><Link to="/product/bag" style={{ textDecoration: 'none' }}><img src={bag} style={{ height: "200px" }} /></Link></div>
                <div style={{ border: "3px solid black", width: "200px", marginLeft: "120px", marginBottom: "30px" }}><Link to="/product/copy" style={{ textDecoration: 'none' }}><img src={copy} style={{ height: "200px", }} /></Link></div>
                <div style={{ border: "3px solid black", width: "200px", marginLeft: "140px", marginBottom: "30px" }}> <Link to="/product/stand" style={{ textDecoration: 'none' }} ><img src={stand} style={{ height: "200px", }} /></Link></div>
                <div style={{ border: "3px solid black", width: "200px", marginLeft: "150px", marginBottom: "30px" }}> <Link to="/product/pen" style={{ textDecoration: 'none' }}><img src={pen} style={{ height: "120px", paddingTop: "30px" }} /></Link></div>
            </div>
            {
                <Conditions open={isOpen} onClose={() => setIsOpen(false)} />
            }
            <Footer />


        </div>

    )
}

export default Home