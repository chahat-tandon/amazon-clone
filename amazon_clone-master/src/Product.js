import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import Fade from 'react-reveal/Fade';

const Product = ({id,title,price,rating,image}) => {
    const [{basket},dispatch] = useStateValue()
    const addToBasket = ()=>{
        dispatch({
            type:"ADD_ITEM",
            item:{
                id,title, price,rating,image
            }
        })
    }
    return (
        <Fade bottom>

            <div className="product">
            {rating>=4 && <span className="product_bestSeller">Best Seller</span>}
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {
                            Array(rating).fill().map((item,index)=>(<p key={index}><span role="img" aria-label="star">⭐️</span></p>))
                        }
                    </div>
                </div>
                <img alt="" src={image}></img>
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </Fade>
    )
}

export default Product
