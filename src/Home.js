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
           image = "https://i.imgur.com/KAyrV77.png"
           price = {3.199}
           score = {5}
        />
        <Product
           id = "2"
           title = "Fone De Ouvido bluetooth V5.3 M10 Sem Fio"
           image = "https://i.imgur.com/6krK1xX.png"
           price = {28.99}
           score = {5}
        />
    </div>
    <div className = "home_row">
         <Product
           id = "3"
           title = "Cafeteira Dolce Gusto Mini Me DMM8 Automática"
           image = "https://i.imgur.com/UPp0Hwm.jpeg"
           price = {299.99}
           score = {5}
        />
         <Product
           id = "4"
           title = "Refrigerador 340L 2 Portas 220V"
           image = "https://i.imgur.com/abzEAH3.jpeg"
           price = {839.99}
           score = {5}
        />
         <Product
           id = "5"
           title = "Aparador de Pelos Super Groom 10 em 1"
           image = "https://i.imgur.com/qDmcy97.png"
           price = {839.99}
           score = {4}
        />
    </div>
       <div className = "home_row">
       <Product
           id = "6"
           title = "Fogão 5 Bocas Atlas Vidro Preto Bivolt"
           image = "https://i.imgur.com/CJ9ycK3.png"
           price = {559.99}
           score = {3}
        />
       </div>
       <div className = "home_row">
        <Product
           id = "1"
           title = "Tablet Samsung Galaxy Tab A9+ 11” 64GB - 4GB RAM Android 13 Octa Core Wi-Fi"
           image = "https://i.imgur.com/2oWRTET.png"
           price = {3.199}
           score = {5}
        />
        <Product
           id = "2"
           title = "Smartphone xiaomi redmi 13c 8gb 256gb preto"
           image = "https://i.imgur.com/uhNJF4N.png"
           price = {909.99}
           score = {5}
        />
    </div>
    <div className = "home_row">
         <Product
           id = "3"
           title = "Maleta De Maquiagem Profissional"
           image = "https://i.imgur.com/SIwqjCN.png8"
           price = {119.99}
           score = {5}
        />
         <Product
           id = "4"
           title = "Cinta Feminina Redutora Abdominal 12 Barbatanas"
           image = "https://i.imgur.com/cKInmq6.png"
           price = {91.99}
           score = {5}
        />
         <Product
           id = "5"
           title = "Combo Maquiagem Completa Para Presente"
           image = "https://i.imgur.com/cgqsGa0.png"
           price = {59.99}
           score = {4}
        />
    </div>
       <Footer />
    </div>
  )
}

export default Home

