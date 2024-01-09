import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/header.component';
import SignInAndSingUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, findAndCreateUser } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { Connect, connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/users.actions";

// import { onAuthStateChanged } from 'firebase/auth';





class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const docRef = await findAndCreateUser(userAuth);
        // console.log(docRef)
        await onSnapshot(docRef, (snapShot) => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data() 
            });
        })

      } else {
        setCurrentUser( userAuth )
        // console.log("Signed out")
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
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/signin" element={<SignInAndSingUpPage/>}/>
    
        </Routes>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps) (App);
