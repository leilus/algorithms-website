import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import BubbleSort from './pages/BubbleSort';
import Home from './Home';
import 'animate.css';

function App() {

 

  return (
   <BrowserRouter>
   <div className='App'>
  
   <div className="header">
            <div className="nav">
                <h1>CHOOSE YOUR ALGORITHM</h1>
                <ul>
                    <li><span><Link style={{ textDecoration: 'none', color: 'black' }} to="/bubblesort">BUBBLE SORT</Link></span></li>
                    <li><span><Link style={{ textDecoration: 'none', color: 'black' }} to="/selectionsort">SELECTION SORT</Link></span></li>
                    <li><span><Link style={{ textDecoration: 'none', color: 'black' }} to="/insertionsort">INSERTION SORT</Link></span></li>
                </ul>
            </div>
        </div>
    
 
  <Routes>
    <Route exact path='/home' element={<Home />} />
    <Route path='/bubblesort' element={<BubbleSort />} />
    <Route path='/selectionsort' element={<BubbleSort />} />
    <Route path='/insertionsort' element={<BubbleSort />} />
  </Routes>

 
   </div>
   </BrowserRouter>
  );
}

export default App;
