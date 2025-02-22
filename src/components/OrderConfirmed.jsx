import OrderConfirmedCard from "./OrderConfirmedCard"
import OrderConfirmedButton from "./OrderConfirmedButton"
import IconOrderConfirmed from "../assets/images/icon-order-confirmed.svg?react"
import { useEffect } from "react";

function OrderConfirmed(props) {
    const chosenDesserts = props.chosenDesserts;
    let totalPrice = chosenDesserts.reduce((a, b) => a + (b.amount*b.price), 0).toFixed(2)

    const isOpen = props.isOpen;
    const openClass = isOpen ? "dialog-show" : "dialog-hide";

    useEffect(() => {
        if(props.isOpen) {
            document.body.classList.add("modal-visible");  // overflow: hidden
        } else {
            document.body.classList.remove("modal-visible");
        }
      }, [props.isOpen]);

    return (
     <dialog open className={`order-confirmed__dialog ${openClass}`}>
        <div className="order-confirmed">
            <div className="order-confirmed__head">
                <img src={IconOrderConfirmed} alt="icon confirm order" className="order-confirmed__icon" />
                <div>
                    <h2 className="order-confirmed__header">Order Confirmed</h2>
                    <p className="order-confirmed__body">We hope you enjoy your food!</p>
                </div>
            </div>
            <div className="order-confirmed__details">
                <div className="order-confirmed__cards">
                    {chosenDesserts. map((dessert, index) => (
                                        <OrderConfirmedCard
                                        key = {dessert.name}
                                        imgThumbnaile={dessert.imgThumbnaile}
                                        name={dessert.name}
                                        price={(dessert.price)}
                                        amount={dessert.amount}
                                        deleteDessert = {props.deleteDessert}/>)
                    )}
                </div>
                <div className="order-confirmed__total">
                    <p className="order-confirmed__total-text">
                        Order total
                    </p>
                    <div className="order-confirmed__total-price">${totalPrice}</div>
                </div>
            </div>

            <div className="order-confirmed__button">
                <OrderConfirmedButton startNewOrder={props.startNewOrder}/>

            </div>
        </div>
        </dialog>
        )

}

export default OrderConfirmed