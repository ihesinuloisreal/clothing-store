import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';




function App() {
  return (
    <div>
    <Routes>

      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>

    </Routes>
      
    </div>
  );
}

export default App;
