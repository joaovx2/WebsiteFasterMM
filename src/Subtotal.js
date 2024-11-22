import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';


function Subtotal() {
    const [{ carrinho }] = useStateValue();

    const getTotal = () => {
        return carrinho.reduce((amount, item) => item.price + amount, 0);
    };

    return (
        <div className="subtotal">
            <p>
                Total ({carrinho.length} items): <strong>R$ {getTotal().toFixed(2)}</strong>
            </p>
            <button>Finalizar Compra</button>
        </div>
    );
}

export default Subtotal;
