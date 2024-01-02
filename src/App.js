import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/header.component';




function App() {
  return (
    <div>
    <Header/>
    <Routes>

      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>

    </Routes>
      
    </div>
  );
}

export default App;
