import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/header.component';

import SignInAndSingUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, findAndCreateUser} from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/users.actions";
import CheckoutPage from './pages/checkout/checkout.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

// import { onAuthStateChanged } from 'firebase/auth';





class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const docRef = await findAndCreateUser(userAuth);
        // console.log(docRef)
        onSnapshot(docRef, (snapShot) => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data() 
            });
        })

      } else {
        setCurrentUser( userAuth );
      }

    })
  }
  componentWillUnmount(){ 
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Routes> 
    
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/shop/*" element={<ShopPage/>}/>
          <Route exact path="/checkout" element={<CheckoutPage/>}/>
          <Route exact path="/signin" element = { this.props.currentUser ? (<Navigate to='/' />) : (<SignInAndSingUpPage/>) }/>
    
        </Routes>
        
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps) (App);
