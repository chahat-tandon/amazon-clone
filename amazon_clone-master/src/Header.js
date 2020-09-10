import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
const Header = () => {
    const [{basket,user},dispatch] = useStateValue()
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <div className="header">
            <Link to={ "/"}>
                <img alt="amazon" className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            <div className="header_search">
                <input placeholder={`Hey ${user?user.email:'Quest'}. Find your favorite item!!!`} className="header_searchInput" type="text"></input>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">Hello {user?user.email:"Guest"}</span>
                            <span className="header_optionLineTwo">{user?"Sign Out" :"Sign In"}</span>

                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">Orders</span>

                    </div>
                <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>

                </div>
            </div>
            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon ></ShoppingBasketIcon>
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
