import ConfirmButton from "./ConfirmButton"
import ConfirmCard from "./ConfirmCard"
import BoxIcon from "../assets/images/icon-carbon-neutral.svg?react"
import EmptyCard from "../assets/images/illustration-empty-cart.svg?react"


// const reducer = (state, newState) => {
//     return newState;
// }


// const kupa = (data) => {
//     ogarnisStan(staryStan, data)
// }

function Confirm(props) {
//     const [state, dispatch] = useReducer(reducer, {a: 3});

//     const newState = 
//     dispatch(newState)


    const chosenDesserts = props.chosenDesserts;
    let lengthDesserts = chosenDesserts.reduce((a, b) => a + b.amount, 0)
    let totalPrice = chosenDesserts.reduce((a, b) => a + (b.amount * b.price), 0).toFixed(2)
    return (
        <div className="confirm">
            {console.log(props.chosenDesserts)}
            <div>
                <h2 className="confirm__header-text">Your Cart ({lengthDesserts})</h2>
            </div>
            {chosenDesserts.length === 0 ?
                <div className="confirm__empty-information">
                    <div className="confirm__empty_img">
                        <img src={EmptyCard} alt="image for empty cards" />
                    </div>
                    <div className="confirm__empty_txt">
                        <p>Your added items will appear here</p>
                    </div>
                </div> :
                <div className="confirm__information">
                    <div className="confirm__cards">
                        {chosenDesserts.map((dessert, index) => (
                            <ConfirmCard
                                key={dessert.name}
                                name={dessert.name}
                                price={(dessert.price)}
                                amount={dessert.amount}
                                deleteDessert={props.deleteDessert} />)
                        )}
                    </div>
                    <div className="confirm__total">
                        <p className="confirm__total-text">
                            Order total
                        </p>
                        <div className="confirm__total-price">${totalPrice}</div>
                    </div>
                    <div className="confirm__box-carbon-natural">
                        <img src={BoxIcon} alt="icon in carbon natural" />
                        <p className="conform__box-text">This is a <span className="conform__box-text--semi-bold"> carbon-neutral</span>  delivery</p>
                    </div>
                    <div className="confirm__button" onClick={props.showElement}><ConfirmButton /></div>
                </div>}

        </div>
    )
}

export default Confirm