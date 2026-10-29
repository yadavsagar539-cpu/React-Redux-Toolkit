import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {


    const cartSelector = useSelector((state) => state.cart.items);

    console.log(cartSelector.length)

    return (

        <div className="header-right">

            <input type="text" placeholder="Search products..." className="search" />

            <Link to="/cartlist" className="cart"> 🛒


                <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>


            </Link>

        </div>


    )
}

export default Cart;