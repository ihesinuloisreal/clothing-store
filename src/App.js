import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/header.component';
import SignInAndSingUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';




function App() {
  return (
    <div>
    <Header/>
    <Routes> 

      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path="/signin" element={<SignInAndSingUpPage/>}/>

    </Routes>
      
    </div>
  );
}

export default App;
