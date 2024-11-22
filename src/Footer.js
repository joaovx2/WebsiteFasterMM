import React from 'react';
import './Footer.css';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="secure-payment">
                    <SecurityIcon style={{ color: '#2ecc71', marginRight: '5px' }} />
                    <span>Seu pagamento é seguro conosco.</span>
                </div>
                <h4>TudoAqui</h4>
                <div className="payment-methods">
                    <PaymentIcon style={{ color: '#2ecc71', marginRight: '5px' }} />
                    <span>Pagamentos aceitos: Cartão de Crédito, PIX.</span>
                </div>
            </div>
        </footer>
    );
};
export default Footer; 