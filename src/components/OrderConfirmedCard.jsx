function OrderConfirmedCard(props) {
    return (
        <div className="order-confirmed-card__container">
            <div className="order-confirmed-card">
                <div className="order-confirmed-card__product">
                    <img src={props.imgThumbnaile} alt="product thumbnail" className="order-confirmed-card__img" />
                    <div className="order-confirmed-card__product-information">
                        <div className="order-confirmed-card__product-name">{props.name}</div>
                        <div className="order-confirmed-card__product-details">
                            <p className="order-confirmed-card__product-count">{props.amount}x</p>
                            <p className="order-confirmed-card__product-unit-price">@ ${(props.price).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="order-confirmed-card__product-total">${(props.amount*props.price).toFixed(2)}</div>

            </div>
            <hr className="order-confirmed-card__line"></hr>
        </div>
    )
}

export default OrderConfirmedCard