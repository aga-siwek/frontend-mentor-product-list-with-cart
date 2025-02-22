import AddButton from "./AddButton"


function Card(props){
   const  imgMobileClass =  props.amount > 0 ?"card__image_mobile selected-dessert":"card__image_mobile"
   const  imgTabletClass =  props.amount > 0 ?"card__image_tablet selected-dessert":"card__image_tablet"
   const  imgDesktopClass =  props.amount > 0 ?"card__image_desktop selected-dessert":"card__image_desktop"

    // props.onAdd(props.name);

    return(
        <div className="card">
            <div className="card__head">
                <img className={imgMobileClass} src={props.imgMobile} alt={`Dessert ${props.name} mobile image`}/>
                <img className={imgTabletClass} src={props.imgTablet} alt={`Dessert ${props.name} tablet image`}/>
                <img className={imgDesktopClass} src={props.imgDesktop} alt={`Dessert ${props.name} desktop image`}/>
                <AddButton  name = {props.name} amount={props.amount} increaseAmount = {props.increaseAmount} decreaseAmount = {props.decreaseAmount}/>
            </div>
            <div className="card__information">
            <p className="card__category-text">{props.category}</p>
            <h2 className="card__name-text">{props.name}</h2>
            <p className="card__price-text">${props.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card