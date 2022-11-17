import React from "react";
import "./index.css";
import Landing from "../../../components/NavBar";
import HeadImage from "../../../images/headImage.svg";
import Google from "../../../images/google.svg";
import Apple from "../../../images/apple.svg";
import About from "../../../components/About";
const Header = () => {
  return (
    <div>
      <div className="begin">
        <Landing />
      </div>
      <div className="bodyWrapper">
        <div className="left">
          <div className="order">
            <h2>
              Order <h2 className="diff">food</h2> anytime, anywhere
            </h2>
            <p className="next">Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
          </div>
          <div>
            <img src={Google} alt='no img' className="google"/>
            <img src={Apple} alt='no img' className="apple"/>
        </div>
        </div>
        <div className="right">
          <img src={HeadImage} alt="no img" className="immg" />
        </div>
      </div>
      <div>
        <About 
        center
        text='Special Meals of the day!'
        subtext='Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.'
        />
      </div>
    </div>
  );
};

export default Header;
