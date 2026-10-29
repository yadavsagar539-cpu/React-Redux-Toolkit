import { Link } from "react-router-dom";
import Cart from "./Cart";



const Header = () => {


    return (

        <header className="header">

            <a href="#" className="logo">ShopEase</a>

            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                
            </nav>

            <Cart/>



        </header>



    )
}

export default Header;



/*
.cart-container{

  max-width: 800px;

  margin: auto;

  background-color: #fff;

  padding: 20px;

  border-radius: 10px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}


.cart-header {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 20px;

  padding-bottom: 20px;

  border-bottom: 1px solid #ccc;
}


.cart-header h2 {

  font-size: 20px;

  margin: 0;
}
*/ 