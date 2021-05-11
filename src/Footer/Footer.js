import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer=() => {
    return(
        <div class="social-container">
      {/* <h3>Social Follow</h3> */}
      <a href="https://www.youtube.com/c/jamesqquick"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<p className="cp-text">
    © Copyright Company Name. All rights reserved.
</p>
</div>

    );
};
export default Footer;