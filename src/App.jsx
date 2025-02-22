import { useState } from 'react'
import './App.css'
import Card from "./components/Card.jsx"
import Confirm from './components/Confirm.jsx'
import OrderConfirmed from './components/OrderConfirmed.jsx'

// baklava
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg"
import baklavaMobile from "./assets/images/image-baklava-mobile.jpg"
import baklavaTablet from "./assets/images/image-baklava-tablet.jpg"
import baklavaThumbnaile from "./assets/images/image-baklava-thumbnail.jpg"

// brownie
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg"
import brownieMobile from "./assets/images/image-brownie-mobile.jpg"
import brownieTablet from "./assets/images/image-brownie-tablet.jpg"
import brownieThumbnaile from "./assets/images/image-brownie-thumbnail.jpg"

// cake
import cakeDesktop from "./assets/images/image-cake-desktop.jpg"
import cakeMobile from "./assets/images/image-cake-mobile.jpg"
import cakeTablet from "./assets/images/image-cake-tablet.jpg"
import cakeThumbnaile from "./assets/images/image-cake-thumbnail.jpg"

// creme-brulee
import cremeBruleeDesktop from "./assets/images/image-creme-brulee-desktop.jpg"
import cremeBruleeMobile from "./assets/images/image-creme-brulee-mobile.jpg"
import cremeBruleeTablet from "./assets/images/image-creme-brulee-tablet.jpg"
import cremeBruleeThumbnaile from "./assets/images/image-creme-brulee-thumbnail.jpg"

// macaron
import macaronDesktop from "./assets/images/image-macaron-desktop.jpg"
import macaronMobile from "./assets/images/image-macaron-mobile.jpg"
import macaronTablet from "./assets/images/image-macaron-tablet.jpg"
import macaronThumbnaile from "./assets/images/image-macaron-thumbnail.jpg"

// meringue
import meringueDesktop from "./assets/images/image-meringue-desktop.jpg"
import meringueMobile from "./assets/images/image-meringue-mobile.jpg"
import meringueTablet from "./assets/images/image-meringue-tablet.jpg"
import meringueThumbnaile from "./assets/images/image-meringue-thumbnail.jpg"

// panna-cotta
import pannaCottaDesktop from "./assets/images/image-panna-cotta-desktop.jpg"
import pannaCottaMobile from "./assets/images/image-panna-cotta-mobile.jpg"
import pannaCottaTablet from "./assets/images/image-panna-cotta-tablet.jpg"
import pannaCottaThumbnaile from "./assets/images/image-panna-cotta-thumbnail.jpg"

// tiramisu
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg"
import tiramisuMobile from "./assets/images/image-tiramisu-mobile.jpg"
import tiramisuTablet from "./assets/images/image-tiramisu-tablet.jpg"
import tiramisuThumbnaile from "./assets/images/image-tiramisu-thumbnail.jpg"


// waffle
import waffleDesktop from "./assets/images/image-waffle-desktop.jpg"
import waffleuMobile from "./assets/images/image-waffle-mobile.jpg"
import waffleTablet from "./assets/images/image-waffle-tablet.jpg"
import waffleThumbnaile from "./assets/images/image-waffle-thumbnail.jpg"

function App() {

  const INITIAL_DESSERTS = [
    {
      name: "Waffle with Berries",
      category: "Waffle",
      imgDesktop: waffleDesktop,
      imgMobile: waffleuMobile,
      imgTablet: waffleTablet,
      imgThumbnaile: waffleThumbnaile,
      price: 6.50,
      amount: 0
    },
    {
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      imgDesktop: cremeBruleeDesktop,
      imgMobile: cremeBruleeMobile,
      imgTablet: cremeBruleeTablet,
      imgThumbnaile: cremeBruleeThumbnaile,
      price: 7.00,
      amount: 0
    },
    {
      name: "Macaron Mix of Five",
      category: "Macaron",
      imgDesktop: macaronDesktop,
      imgMobile: macaronMobile,
      imgTablet: macaronTablet,
      imgThumbnaile: macaronThumbnaile,
      price: 8.00,
      amount: 0
    },
    {
      name: "Classic Tiramisu",
      category: "Tiramisu",
      imgDesktop: tiramisuDesktop,
      imgMobile: tiramisuMobile,
      imgTablet: tiramisuTablet,
      imgThumbnaile: tiramisuThumbnaile,
      price: 5.50,
      amount: 0
    },
    {
      name: "Pistachio Baklava",
      category: "Baklava",
      imgDesktop: baklavaDesktop,
      imgMobile: baklavaMobile,
      imgTablet: baklavaTablet,
      imgThumbnaile: baklavaThumbnaile,
      price: 4.00,
      amount: 0
    },
    {
      name: "Lemon Meringue Pie",
      category: "Pie",
      imgDesktop: meringueDesktop,
      imgMobile: meringueMobile,
      imgTablet: meringueTablet,
      imgThumbnaile: meringueThumbnaile,
      price: 5.00,
      amount: 0
    },
    {
      name: "Red Velvet Cake",
      category: "Cake",
      imgDesktop: cakeDesktop,
      imgMobile: cakeMobile,
      imgTablet: cakeTablet,
      imgThumbnaile: cakeThumbnaile,
      price: 4.50,
      amount: 0
    },
    {
      name: "Salted Caramel Brownie",
      category: "Brownie",
      imgDesktop: brownieDesktop,
      imgMobile: brownieMobile,
      imgTablet: brownieTablet,
      imgThumbnaile: brownieThumbnaile,
      price: 5.50,
      amount: 0
    },
    {
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      imgDesktop: pannaCottaDesktop,
      imgMobile: pannaCottaMobile,
      imgTablet: pannaCottaTablet,
      imgThumbnaile: pannaCottaThumbnaile,
      price: 6.50,
      amount: 0
    }
  ];

  const [desserts, setDesserts] = useState(INITIAL_DESSERTS);
  const [isOpen, setIsOpen] = useState(false)

  const increaseAmount = (name) => {
    console.log(name)
    const newDesserts = desserts.map(dessert => dessert.name === name ? { ...dessert, amount: dessert.amount + 1 } : dessert);
    setDesserts(newDesserts);
    console.log(desserts);
  }

  const decreaseAmount = (name) => {
    console.log(name)
    const newDesserts = desserts.map(dessert => dessert.name === name ? { ...dessert, amount: dessert.amount - 1 } : dessert);
    setDesserts(newDesserts);
    console.log(desserts);
  }

  const deleteDessert = (name) => {
    console.log(name)
    const removeDesert = desserts.map(dessert => dessert.name === name ? { ...dessert, amount: 0 } : dessert);
    setDesserts(removeDesert);
  }

  const showElement = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }


  const startNewOrder = () => {
    setDesserts(INITIAL_DESSERTS);
    setIsOpen(false)

  }

  let chosenDesserts = desserts.filter(dessert => dessert.amount > 0)

  return (
    <>
      <div className="container">
        <div className="desserts">
          <header className='desserts__header'>
            <h1 className="desserts__header--text">Desserts</h1>
          </header>
          <main className='desserts__cards'>
            {desserts.map((dessert, index) => (
              <div className="desserts__card" key={index}>
                <Card
                  imgDesktop={dessert.imgDesktop}
                  imgMobile={dessert.imgMobile}
                  imgTablet={dessert.imgTablet}
                  imgThumbnaile={dessert.imgThumbnaile}
                  category={dessert.category}
                  name={dessert.name}
                  price={dessert.price}
                  amount={dessert.amount}
                  increaseAmount={increaseAmount}
                  decreaseAmount={decreaseAmount}
                />
              </div>
            ))}
          </main>
        </div>
        <div className="confirm__container">
          <Confirm
            chosenDesserts={chosenDesserts}
            deleteDessert={deleteDessert}
            showElement={showElement} />
        </div>
      </div>
      <OrderConfirmed
        chosenDesserts={chosenDesserts}
        startNewOrder={startNewOrder}
        isOpen={isOpen}
      />
    </>
  )
}
export default App
