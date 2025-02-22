import xIcon from "../assets/images/icon-remove-item.svg?react"

function ConfirmCard(props) {
    const deleteDessert  = () => {
        props.deleteDessert(props.name)
    }
    return (
        <div className="confirm-card">
            <div className="confirm-card__container">
                <div className="confirm-card__product-information">
                    <div className="confirm-card__product-name">{props.name}</div>
                    <div className="confirm-card__product-details">
                        <p className="confirm-card__product-count">{props.amount}x</p>
                        <div className="confirm-card__price">
                        <p className="confirm-card__product-unit-price">@ ${(props.price).toFixed(2)}</p>
                        <p className="confirm-card__product-price">${(props.amount*props.price).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="confirm-card__remove" onClick={deleteDessert}>
                    <img src={xIcon} alt="remove icon" />
                </div>
            </div>
            <hr className="confirm-card__line"></hr>
        </div>
    )
}
export default ConfirmCard