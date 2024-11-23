import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ carrinho }] = useStateValue(); 
    return (
        <div className="checkout">
            <h2>Seu carrinho</h2>
            {carrinho?.length === 0 ? (
                <div>
                    <p>Seu carrinho está vazio</p>
                </div>
            ) : (
                <div>
                    {carrinho.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            score={item.score}
                        />
                    ))}
                </div>
            )}  
            {carrinho.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal/>                  
                </div>
            )}
        </div>
    );
}
export default Checkout;
