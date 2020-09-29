import React from "react";
import "../styles/Banner.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__heading">
          <h1>
            The Most Powerful <br /> Checking Account
          </h1>
          <br/>
          <h4>
            Our checking account gives you higher returns <br />
            than a savings account with no hidden fees.{" "}
          </h4>
        </div>
        <div className="banner__form">
            <div className="banner__input">
                <MailOutlineIcon/>
               <input placeholder="Enter Email Address" type="text"/>
            </div>
               <button>Join Now</button>
        </div>
        <div className="flag"> 
        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png" alt=""/>
            <h4>281 spots left for Priority Access</h4>  
        </div>
        <div className="store_logo">
            <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/googleplay%403x.png" alt=""/>
            <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/applepay%403x.png" alt=""/>
        </div>
      </div>
      <div className="banner__right">
        <img
          src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
