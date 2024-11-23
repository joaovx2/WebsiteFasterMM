import React from 'react';
import Product from './Product';
import Footer from './Footer';
import './home.css'
import './Product.css'
import UserNotification from './user'; 


function Home() {
  return (
    <div className = "home">
      <UserNotification></UserNotification>
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
           title = "Fone De Ouvido bluetooth V5.3 M10 Sem Fio"
           image = "./imgs/Produto2.png"
           price = {28.99}
           score = {5}
        />
    </div>
    <div className = "home_row">
         <Product
           id = "3"
           title = "Cafeteira Dolce Gusto Mini Me DMM8 Automática"
           image = "./imgs/Produto3.png"
           price = {299.99}
           score = {5}
        />
         <Product
           id = "4"
           title = "Refrigerador 340L 2 Portas 220V"
           image = "./imgs/Produto4.png"
           price = {839.99}
           score = {5}
        />
         <Product
           id = "5"
           title = "Aparador de Pelos Super Groom 10 em 1"
           image = "./imgs/Produto5.png"
           price = {839.99}
           score = {4}
        />
    </div>
       <div className = "home_row">
       <Product
           id = "6"
           title = "Fogão 5 Bocas Atlas Vidro Preto Bivolt"
           image = "./imgs/Produto6.png"
           price = {559.99}
           score = {3}
        />
       </div>
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
           title = "Smartphone xiaomi"
           image = "./imgs/Produto2.png"
           price = {909.99}
           score = {5}
        />
    </div>
    <div className = "home_row">
         <Product
           id = "3"
           title = "Maleta De Maquiagem Profissional"
           image = "./imgs/Produto3.png"
           price = {119.99}
           score = {5}
        />
         <Product
           id = "4"
           title = "Cinta Feminina Redutora Abdominal 12 Barbatanas"
           image = "./imgs/Produto4.png"
           price = {91.99}
           score = {5}
        />
         <Product
           id = "5"
           title = "Combo Maquiagem Completa Para Presente"
           image = "./imgs/Produto5.png"
           price = {59.99}
           score = {4}
        />
    </div>
       <Footer />
    </div>
  )
}

export default Home

