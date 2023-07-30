import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./Home/Checkout/StateProvider";
import {auth} from "./Home/Login/connect";

function Header() {
  const [{ basket,user},dispatch] = useStateValue();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg"
            alt="Error"
          />
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="nav">
          <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="nav_option">
            <span className="nav_optionLineOne">Hello {!user?'Guest':user.email}</span>
            <span className="nav_optionLineTwo">{user?'Sign out':'Sign in'}</span>
          </div>
          </Link>
          <Link to='/orders'>
          <div className="nav_option">
            <span className="nav_optionLineOne">Returns</span>
            <span className="nav_optionLineTwo">& Orders</span>
          </div>
          </Link>
          <div className="nav_option">
            <span className="nav_optionLineOne">Your</span>
            <span className="nav_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="nav_optionBasket">
              <ShoppingBasketIcon />
              <span className="nav_optionLineTwo nav_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
