import './BubbleSort.css';
import 'animate.css';
import bbsort from './img/bbsort.gif';
import React, { useState, useEffect, useRef } from "react";
import { CopyBlock } from "react-code-blocks";
import CodeComponent from './CodeComponent';
import SecondCodeComponent from './SecondCodeComponent';



const BubbleSort = () => {
  const [active, setActive] = useState("first");
  const [show, setShow]= useState(true);
  const [showSnippet, setShowSnippet] = useState(false);

    function toggle(){
        setShow(true);
        setShowSnippet(false);
        setActive("first");
    }

    function secondtoggle(){
        setShowSnippet(true);
        setShow(false);
        setActive("second");
    }



    return ( 
        <div className="bubble-sort">
            <div className="header-bb">
            <h1 class="animate__animated animate__zoomIn">Bubble Sort - sortowanie babelkowe</h1>
            </div>
            
            

           
            
            <button onClick={toggle} style={{backgroundColor: (active === "first") ? "#11171c" : "#1d2730"}}>C++</button>
            <button onClick={secondtoggle } style={{backgroundColor: (active === "second") ? "#11171c" : "#1d2730"}}>C++ without library</button>
            {show && <CodeComponent />}
            {showSnippet && <SecondCodeComponent/>}
               
       </div>
    );
}
 
export default BubbleSort;