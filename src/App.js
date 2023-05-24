import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import BubbleSort from './pages/BubbleSort';
import Home from './pages/Home';
import 'animate.css';
import CodeComponent from './pages/code_sections/CodeComponent';
import logoGit from './pages/img/github.png';
import SelectionSort from './pages/SelectionSort';
import InsertionSort from './pages/InsertionSort';

function App() {

 

  return (
   <BrowserRouter>
   <div className='App'>
  
   <div className="header">
  
            <div className="nav">
                <h1>CHOOSE YOUR ALGORITHM</h1>
                <ul>
                <li><span><Link style={{ textDecoration: 'none'}} to="/">HOME PAGE</Link></span></li>
                    <li><span><Link style={{ textDecoration: 'none' }} to="/bubblesort">BUBBLE SORT</Link></span></li>
                    <li><span><Link style={{ textDecoration: 'none' }} to="/selectionsort">SELECTION SORT</Link></span></li>
                    <li><span><Link style={{ textDecoration: 'none'}} to="/insertionsort">INSERTION SORT</Link></span></li>
                </ul>
               <a href="https://github.com/leilus/"> <img src={logoGit} alt="My Github" /> </a>
            </div>
        </div>
    
 
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/bubblesort' element={<BubbleSort />} />
    <Route path='/selectionsort' element={<SelectionSort />} />
    <Route path='/insertionsort' element={<InsertionSort />} />
  </Routes>

 
   </div>
   </BrowserRouter>
  );
}

export default App;
