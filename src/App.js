import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'

const HatsPage = (props)=> {

  console.log(props);
  return (
  <div>
    <h1>Hats Page</h1>
  </div>
  );
}


function App() {
  return (
    <div>
    <Routes>

      <Route exact path="/home/j" element={<HomePage/>}/>
      <Route path="/hats" element={<HatsPage/>}/>

    </Routes>
      
    </div>
  );
}

export default App;
