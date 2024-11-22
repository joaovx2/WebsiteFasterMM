import React from 'react';
import Product from './Product';
import './home.css'
import './Product.css'

function Home() {
  return (
    <div className = "home">
            <img
           className = "home__banner" 
           src={require('./imgs/banner.png')}
           alt = ""
        />
    <div className = "home_row">
        <Product
           id = "1"
           title = "Apple iPhone 14 128GB Estelar"
           image = "./imgs/Produto1.png"
           price = {3.199}
           score = {5}
        />
        <Product
           id = "2"
           title = "PRODUTAO NUMERO 2"
           image = "./imgs/Produto2.png"
           price = {44.69}
           score = {5}
        />
    </div>
    <div className = "home_row">
         <Product
           id = "3"
           title = "PRODUTAO NUMERO 3"
           image = "./imgs/Produto3.png"
           price = {69.69}
           score = {5}
        />
         <Product
           id = "4"
           title = "PRODUTAO NUMERO 4"
           image = "./imgs/Produto4.png"
           price = {24.69}
           score = {5}
        />
         <Product
           id = "5"
           title = "PRODUTAO NUMERO 5"
           image = "./imgs/Produto5.png"
           price = {124.69}
           score = {4}
        />
    </div>
       <div className = "home_row">
       <Product
           id = "6"
           title = "PRODUTAO NUMERO 6"
           image = "./imgs/Produto6.png"
           price = {224.69}
           score = {3}
        />
       </div>
    </div>
  )
}

export default Home

