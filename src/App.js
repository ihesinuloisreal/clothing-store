import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/header.component';
import SignInAndSingUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, findAndCreateUser } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';





class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const docRef = await findAndCreateUser(userAuth);
        console.log(docRef)
        await onSnapshot(docRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          })
        })

      } else {
        this.setState({currentUser: userAuth })
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
      <Header currentUser = {this.state.currentUser} />
      <Routes> 
  
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signin" element={<SignInAndSingUpPage/>}/>
  
      </Routes>
        
      </div>
    );
  }
}

export default App;
