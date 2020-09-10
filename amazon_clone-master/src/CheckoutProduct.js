import React from 'react'
import { useStateValue } from './StateProvider'
import './CheckoutProduct.css'
import Fade from 'react-reveal/Fade';

export const CheckoutProduct = ({id,title,price,rating,image}) => {
    const [{basket},dispatch] = useStateValue()
    const removeToBasket = ()=>{
        dispatch({
            type:"REMOVE_ITEM",
            item:{
                id,title,price,rating,image
            }
        })
    }


    return (
        <Fade bottom>


        <div className="checkoutProduct">
            {rating>=4 && <span className="checkoutProduct_bestSeller">Best Seller</span>}
            <div className="checkoutProduct_image">

            <img alt=""  src={image}></img>
            </div>

            <div className="checkoutProduct_info">
                <h3>{title}</h3>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating).fill().map((item,index)=>(<p key={index}><span role="img" aria-label="star">⭐️</span></p>))
                    }
                </div>
                <button onClick={removeToBasket}>Remove to Basket</button>
            </div>
        </div>
        </Fade>
    )
}
