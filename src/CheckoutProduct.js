import React from 'react'
import './checkoutProduct.css'  // Make sure you have this CSS file
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, score}) {
    const [{carrinho}, dispatch] = useStateValue();

    const RemoveFromCarrinho = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    }
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt=""/>
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>R$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__score">
                {Array(score)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>★</p>
                    ))
                }
            </div>
            <button onClick={RemoveFromCarrinho}>Remover do carrinho</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;
