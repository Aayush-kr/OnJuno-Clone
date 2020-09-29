import React from 'react'
import '../styles/OfferCard.css';

function OfferCard({img, children}) {
    return (
        <div className="offerCard">
             <img src={img} />
              {children}  
           
        </div>
    )
}

export default OfferCard
