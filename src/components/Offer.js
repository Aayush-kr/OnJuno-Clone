import React from "react";
import "../styles/Offer.css";
import OfferCard from "../components/OfferCard";
import Loader from "../components/Loader";
import CheckIcon from "@material-ui/icons/Check";

function Offer() {
  return (
    <div className="offer">
      <div className="offer__text">
        <h2>Sign up early to save more</h2> <br />
        <h3>
          Depending on the level of your checking account, you’ll earn <br />
          between 1.15%3 to 2.15%1 bonus rate.
        </h3>
      </div>
      <div className="offer__card">
        <OfferCard img="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png">
          <div className="offerCard__top">
            <div className="top_Content">
              <h3>Metal</h3>
              <h1>2.15%</h1>
              <div className="cashback">
                <a href="#" class="badge">
                  <span>5%</span>
                </a>
                <h4>cash back</h4>
              </div>
            </div>
          </div>
          <div className="offerCard__middle">
            <div className="middle_Content">
              <Loader /> <br />
              <button className="middle_btn">Signup Now</button>
              <hr />
              <div className="includes">
                <h4>INCLUDES</h4>
                <div className="includes__content">
                  <p>
                    <CheckIcon /> <span> Charcoal Black Metal Card </span>
                  </p>
                  <p>
                    <CheckIcon />{" "}
                    <span> 2.15%1 Bonus Rate Checking Account </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> 5% Cash back on brands you love </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> Free Cash Withdrawals </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> Phone & Chat Support </span>
                  </p>
                </div>
              </div>
              <div className="middle_bottomText">
                Fund your account with a minimum opening deposit of $1000. 3
                additional free ATM withdrawals per month from out of network
                ATMs.
              </div>
            </div>
          </div>
          <div className="offerCard__bottom">
            <div className="bottom_Content">
              <p>
                <h5> $11.99/m Membership Fee </h5>
                <h4> Free for 6 months </h4>
                <h3> ~$72 Savings </h3>
              </p>
            </div>
          </div>
        </OfferCard>
        <OfferCard img="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png">
          <div className="offerCard__top">
            <div className="top_Content">
              <h3>Premium</h3>
              <h1>1.65%</h1>
              <div className="cashback">
                <a href="#" class="badge">
                  <span>4%</span>
                </a>
                <h4>cash back</h4>
              </div>
            </div>
          </div>
          <div className="offerCard__middle">
            <div className="middle_Content">
              <Loader />
              <br />
              <button className="middle_btn">Up Next</button>
              <hr />
              <div className="includes">
                <h4>INCLUDES</h4>
                <div className="includes__content">
                  <p>
                    <CheckIcon /> <span> Free Debit Card </span>
                  </p>
                  <p>
                    <CheckIcon />{" "}
                    <span> 1.65%2 Bonus Rate Checking Account </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> 4% Cash back on brands you love </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> Free Cash Withdrawals </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> Phone & Chat Support </span>
                  </p>
                </div>
              </div>
              <div className="middle_bottomText">
                Fund your account with a minimum opening deposit of $500. 2
                additional free ATM withdrawals per month from out of network
                ATMs.
              </div>
            </div>
          </div>
          <div className="offerCard__bottom">
            <div className="bottom_Content">
              <h5> $6.99/m Membership Fee</h5>

              <h4>Coming Soon</h4>
              <h3> ~$80 Savings </h3>
            </div>
          </div>
        </OfferCard>
        <OfferCard img="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png">
          <div className="offerCard__top">
            <div className="top_Content">
              <h3>Basic</h3>
              <h1>1.15%</h1>
              <div className="cashback">
                <a href="#" class="badge">
                  <span>3%</span>
                </a>
                <h4>cash back</h4>
              </div>
            </div>
          </div>
          <div className="offerCard__middle">
            <div className="middle_Content">
              <Loader /> <br />
              <button className="middle_btn">Coming Soon</button>
              <hr />
              <div className="includes">
                <h4>INCLUDES</h4>
                <div className="includes__content">
                  <p>
                    <CheckIcon /> <span> Free Debit Card </span>
                  </p>
                  <p>
                    <CheckIcon />{" "}
                    <span> 1.15%1 Bonus Rate Checking Account </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> 3% Cash back on brands you love </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> Free Cash Withdrawals </span>
                  </p>
                  <p>
                    <CheckIcon /> <span> Phone & Chat Support </span>
                  </p>
                </div>
              </div>
              <div className="middle_bottomText">
                Fund your account with a minimum opening deposit of $500. 2
                additional free ATM withdrawals per month from out of network
                ATMs.
              </div>
            </div>
          </div>
          <div className="offerCard__bottom">
            <div className="bottom_Content">
              <h5> No Membership Fee </h5>

              <h4>Free Forever! </h4>
              <h3> ~$100 Savings </h3>
            </div>
          </div>
        </OfferCard>
      </div>
    </div>
  );
}

export default Offer;
