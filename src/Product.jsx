import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { useEffect } from "react";
import { fetchProducts } from "./Redux/Productslice";
import { addItem, removeItem } from "./Redux/Slics";

const Product = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchProducts())
    }, [])


    const productSelector = useSelector((state) => state.products.items)

    console.log(productSelector);

    const cartSelector = useSelector((state) => state.cart.items);

    console.log(cartSelector.length)



    return (

        <div className="grid"  >

            {
                productSelector.length && productSelector.map((item) => (

                    <div className="card" key={item.id}>
                        <img src={item.thumbnail} />

                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="description">{item.description}</div>
                            <div className="category">{item.category}</div>
                            <div className="rating">{item.rating}</div>
                            <div className="price">{item.price}</div>
                            {
                                cartSelector.find((cartItem) => cartItem.id === item.id)?
                                    <button  className="remove-btn" onClick={() => dispatch(removeItem(item))} >Remove From Cart</button>
                                    :
                                    <button  className="btn" onClick={() => dispatch(addItem(item))}>Added to Cart</button>
                                
                            }

                        </div> 
                    </div>
                ))
            }



        </div>
    )
}

export default Product;