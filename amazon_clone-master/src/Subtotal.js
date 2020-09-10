import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
export const Subtotal = ({sum,total}) => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({sum} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"></input>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
                value={total}
            >

            </CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div>
    )
}
