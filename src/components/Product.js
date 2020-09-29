import React from 'react'
import '../styles/Product.css'
import Offer from '../components/Offer'

function Product() {
    return (
        <div className="product">
            <div className="product__client">
                 <h5>BACKED BY THE BEST</h5>
                 <div className="client__logo">
                     <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png" alt=""/>
                     <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png" alt=""/>
                     <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" alt=""/>
                 </div> 
            </div>
            <div className="product__offer">
                <div className="productOffer__left">
                    <h4>Start saving for a rainy day fund</h4><br/>
                    <h2>Use Our Checking Account to <br/> Achieve Your Financial Goals </h2><br/>
                    <h5>With the latest Federal rate cut, the largest banks are offering close to 0% APY on <br/> 
                    their checking and savings accounts. OnJuno checking will earn you more than <br/> 
                    20x the national average*. Deposits up to $250,000 are FDIC insured through our <br/>
                     partner bank. Grow your idle money faster with our checking account and start <br/> 
                     saving towards a rainy day fund, big expense, or vacation. </h5>
                </div>
                <div className="productOffer__right">
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" alt=""/>
                </div>
            </div>
            <Offer/>
            
        </div>
    )
}

export default Product
