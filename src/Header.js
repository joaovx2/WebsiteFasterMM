import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useStateValue } from './StateProvider';
function Header() { {/* Header thing*/}
  const [{carrinho}] = useStateValue();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <nav className="header"> 
      <Link to="/">       
          <img
             className = "header__logo" 
             src={require('./imgs/logo.png')}
             alt = ""
          />
      </Link> 
      {/*Search Boxx*/}
      <form onSubmit={handleSearchSubmit} className="header_search">
          <input 
              type="text" 
              className="header__searchinput" 
              value={searchTerm} 
              onChange={handleSearchChange} 
              placeholder="Busque por um produto..."
          />
          <SearchIcon className="header__searchicon" />
      </form> 
    </nav>
  );
}

export default Header
