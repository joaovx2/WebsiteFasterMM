import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';


function Product({id, title, image, price, score}) {
  const [{}, dispatch] = useStateValue();

  

  const AddToCarrinho = (paymentMethod) => {
      dispatch ({
        type: 'ADD_TO_CART',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            score: score,
            paymentMethod: paymentMethod,
        }
      })
  };

  const discountedPrice = (price * 0.67).toFixed(2);

  return (
    <div className = "product">
        <div className = "Product__Info">
        <p>{title}</p>
        <p className = "Product__price">  
           <strong>R$</strong>
           <strong>{price}</strong>
        </p>          
    <div className = "Product__score">
        {
            Array(score)
            .fill()
            .map((_, index) => (
                <p key={index}>★</p>
            )
            )
        }
     </div>
    </div>
     <img src={image} alt=""/>
     <div className="product__buttons">
        <div className="button-container">
             PIX <span className="discount"><strong>(-33%)</strong></span>
        </div>
        <div className="button-container">
             CARTÃO
        </div>
        <div className="button-container">
             BOLETO
        </div>
     </div>
</div>
  );
}

export default Product;
