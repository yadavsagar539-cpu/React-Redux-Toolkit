import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeAllItems, removeItem } from "./Redux/Slics";
import { useNavigate } from "react-router-dom";

export default function Cartlist() {

    const cartSelector = useSelector((state) => state.cart.items);

    console.log(cartSelector);

    const [cartItems, setCartItems] = useState(cartSelector)

    const dispatch = useDispatch();

    const manageQuantity = (id, q) => {

        let quantity = parseInt(q) > 1 ? parseInt(q) : 1;

        const cartTempItems = cartSelector.map((item) => {

            return item.id == id ?

                { ...item, quantity } : item
        })

        console.log(cartTempItems[0])

        setCartItems(cartTempItems)
    }

    useEffect(() => {

        setCartItems(cartSelector)
    } , [cartSelector])



    const navigate = useNavigate ()

    const handlePlaceOrder = () => {

        localStorage.clear();

        dispatch(removeAllItems());

        alert("Order Placed")

        navigate ("/")
    }

    return (

        <div className="cart-container">

            <div className="cart-header">

                <h2>Your Cart Items</h2>

                <span>{cartSelector.length} items</span>

            </div>

            {
                cartItems.length > 0 ? cartItems.map((item) => (

                    <div key={item.id} className="cart-item">

                        <div className="cart-info">

                            <img src={item.thumbnail} alt="" />

                            <div className="item-details">

                                <h4>{item.title}</h4>

                                <p>{item.category}</p>

                                <p>{item.brand}</p>

                            </div>

                            <div className="item-actions">

                                <div style={{ display: 'flex' }}>

                                    <input type="number" placeholder="Enter Quantity" style={{ margin: '15px' }} onChange={(event) => manageQuantity(item.id, event.target.value)}  
                                        value= {item.quantity ? item.quantity : 1} />

                                    <div>

                                        <span className="price">

                                            ${(item.quantity ? item.price * item.quantity : item.price) . toFixed(2)}

                                        </span>

                                        <button className="btn" onClick={() => dispatch(removeItem(item))}>Remove</button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                )) : null
            }

            <div className="cart-footer">

                Total: ${(cartItems.reduce((sum, item) => item.quantity ?  sum + item.price * item.quantity : sum+item.price , 0)) . toFixed(2)}

            </div>

            <button className="btn"  onClick={handlePlaceOrder}>Place Order</button>

        </div>
    )
}