import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
 
const Header=(props) => {
    return(
<ul style={{backgroundColor:props.bg}}>
<li onClick={()=>props.setText("Home")}><Link to="/">Home</Link></li>
<li onClick={()=>props.setText("Explore")}><Link to="Explore">Explore</Link></li>
<li onClick={()=>props.setText("Profile")}><Link to="Profile">Profile</Link></li>
</ul>
    )
};
export default Header;