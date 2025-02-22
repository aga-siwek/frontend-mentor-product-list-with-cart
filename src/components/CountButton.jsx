import decrementIcon from "../assets/images/icon-decrement-quantity.svg?react"
import incrementIcon from "../assets/images/icon-increment-quantity.svg?react"

function CountButton() {
    return (
        <div className="count-button">
            <button className="count-button__button" >
                <img src={decrementIcon} className="count-button__decrement-icon" />
                <p className="count-button__text"> 0</p>
                <img src={incrementIcon} className="count-button__increment-icon" />
            </button>
        </div>

    )
}

export default CountButton