import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

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
    <header className="header footer">
      <h1> REACT PIZZA CO.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2> OUR MENU</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian pizza restaurants typically have a warm and
            inviting design that combines traditional Italian elements with
            modern accents.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={Pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> we are working on our menu come back later :)</p>
      )}

      {/*  // operator
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={Pizza.name} />
          ))}
        </ul>
      )} */}

      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      />

       */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3> {pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>
        <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 10;
  const closehour = 22;

  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);

  // if (!isOpen) return <p> closed</p>;

  // if (hour >= openhour && hour <= closehour) alert(" we are currently open");
  // else alert("Sorry we are closed");

  return (
    <footer className="footer">
      {/*  // && operator
      {isOpen && (
        <div className="order">
          <p>
            {" "}
            We are open until {closehour} :00 . Come visit us or order online{" "}
          </p>
          <button className="btn"> ORDER NOW</button>
        </div>
      )} */}

      {isOpen ? (
        <Order closehour={closehour} />
      ) : (
        <p>
          <h5 style={{ textAlign: "center" }}>we are closed !</h5>
          <br></br> You're welcome between the {closehour}:00 and {openhour}:00
          .
        </p>
      )}
    </footer>
  );

  // return (
  //   <footer className="footer">
  //     React.createElement("footer", null, "WE ARE OPEN NOW");
  //   </footer>
  // );
}
function Order({ openhour, closehour }) {
  return (
    <div className="order">
      <p>
        We are open from {openhour} to {closehour} :00 . Come visit us or order
        online
      </p>
      <button className="btn"> ORDER NOW</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
