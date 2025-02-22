
function OrderConfirmedButton(props){
    return(
        <div className="order-confirmed-button">
            <button className="order-confirmed-button__button" onClick={props.startNewOrder}>
               <p className="order-confirmed-button__text">Start New Order</p>
            </button>
        </div>
    )
}

export default OrderConfirmedButton