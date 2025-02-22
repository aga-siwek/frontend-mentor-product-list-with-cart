import AddIcon from "../assets/images/icon-add-to-cart.svg?react"
import decrementIcon from "../assets/images/icon-decrement-quantity.svg?react"
import incrementIcon from "../assets/images/icon-increment-quantity.svg?react"

function AddButton(props) {

    const incrementCount = () => {
        props.increaseAmount(props.name)
    }

    const decrementCount = () => {
        props.decreaseAmount(props.name)
    }
    return (
        <div>
            {props.amount === 0 ?
                <div className="add-button">
                    <button className="add-button__button" onClick={incrementCount}>
                        <div>
                            <img src={AddIcon} className="add-button__icon" alt="add button icon" />
                        </div>
                        <div>
                            <p className="add-button__text"> Add to Cart</p>
                        </div>
                    </button>
                </div> :
                <div className="count-button">
                    <div className="count-button__button" >
                        <button className="count-button__decrement" onClick={decrementCount} >
                            <img src={decrementIcon} className="count-button__icon" />
                        </button>
                        <div>
                            <p className="count-button__text">{props.amount}</p>
                        </div>
                        <button className="count-button__increment" onClick={incrementCount}>
                            <img src={incrementIcon} className="count-button__icon" />
                        </button>
                    </div>
                </div>}
        </div>
    )
}

export default AddButton