import './App.css';
import { pizzaData } from './data.js';
import React from 'react';


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {

  return (
    <header className='header'>
      <h1>Red Sauce Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <div className='menu'>
      <h2>Our Menu</h2>

   

  {pizzas.length > 0 ? ( 
    <React.Fragment>
    <p>
    Authentic Italian cuisine. 6 creative dishes to choose from. 
    All from our stone overn, all oranize, all delicious.
   </p>
      <ul className='pizzas'>
      { pizzaData.map(pizza =>
        <Pizza pizza={pizza} key={pizza.name}/>
      )};
      </ul>
    </React.Fragment>  
  ) : (
    <p>We are still working on our menu. Please come back later</p>
  )}
    </div>
  )
}

function Open(props) {
  return (
    <div className='order'>
    <p>We are currently open until {props.closeHour}:00 </p>
    <button className='btn'>Order</button>
  </div>
  )
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Open closeHour={closeHour}/>
      ) : (
        <p>We are close</p>
      )}
      </footer>
  )

}

function Pizza({pizza}) {

  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
     <img src={pizza.photoName} alt={pizza.name}/>
     <div>
      <h3 >{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price + 3}</span>
     </div>
    </li>
  )
}
export default App;
