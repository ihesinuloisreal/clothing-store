import React from "react";
import './header.styles.scss'
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from "./header.styles";



const Header = ({currentUser, hidden}) =>{
    return (
        <HeaderContainer>
        
        {/* {console.log(currentUser)} */}
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                        (<OptionDiv onClick={() => auth.signOut()}> SIGN OUT </OptionDiv>) 
                        : 
                        (<OptionLink to='/signin'> SIGN IN</OptionLink>)
                }
                <CartIcon />
            </OptionsContainer>
            {
            hidden ? null : <CartDropdown/>

            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);