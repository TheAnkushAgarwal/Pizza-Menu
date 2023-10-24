import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  

function App(){
    return (
        <div className= "container">
            <Header/>
            <Menu/>
            <Footer />
        </div>
    );
}

function Header(){
    const style = {};

    return (<header className ="header">
        <h1 style= {style}>Fast React Pizza Co.</h1>
    </header>);
}

function Menu(){
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;



    return(
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas>0 && (
                <ul className="pizzas">
                {pizzas.map((pizza)=>(
                    <Pizza pizzaObj= {pizza} key={pizza.name}/> 
                ))}
                </ul>
            )}

            
            {/* <Pizza name ="Pizza Spinaci" ingredient="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg"
            price={10} />

            <Pizza name="Pizza Funghi" ingredient="Tomato, mushroom" price={12} photoName = "pizzas/funghi.jpg" /> */}
        </main>
    );
}

function Pizza({ pizzaObj}){


    if(pizzaObj.soldout) return null;
    return (<li className = {`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src = {pizzaObj.photoName} alt={pizzaObj.Name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
        </div>
    </li>);
}


function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour =24;
    const isOpen = hour>= openHour && hour<= closeHour;
    console.log(isOpen); 


    // if(hour>= openHour && hour<= closeHour)
    //     alert("We're currently open!")
    // else
    //     alert("Sorry we're closed");
    

    return(
        <footer className="footer">
            {isOpen ? (
                <Order closeHour ={closeHour} />
):(
            <p>
                Were happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>)
}
        </footer>
    );
    // return React.createElement("footer", null, "We're currently open!");
}

function Order({closeHour, openHour}){
    return (
        <div className="order">
            <button className="btn">Open</button>
            <p>
                We're open from {openHour}:00 untill {closeHour}:00. Come Visit us or order online.
            </p>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    <App />
</React.StrictMode>);