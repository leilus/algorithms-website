import './BubbleSort.css';
import 'animate.css';
import bbsort from './img/bubble_sort.gif';
import React, { useState, useEffect, useRef } from "react";
import { CopyBlock } from "react-code-blocks";
import CodeComponent from './code_sections/CodeComponent';
import SecondCodeComponent from './code_sections/SecondCodeComponent';



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
            <div className="code_section">
            <div className="section_bs">
                <p>Polega na porównywaniu dwóch kolejnych elementów i zamianie ich kolejności, jeżeli zaburza ona porządek, w jakim sortuje się tablicę. Sortowanie kończy się, gdy podczas kolejnego sortowania nie dokonano zmiany.</p>
               
            </div>
            <div className="information_bs">
                <p><strong>Złożoność czasowa</strong> O(n^2)</p>
                <p><strong>Złożoność pamięciowa </strong>O(1)</p>
            </div>
            </div>
           
          
            
            <div className="component_bs">
            <button onClick={toggle} style={{backgroundColor: (active === "first") ? "#11171c" : "#1d2730"}}>C++</button>
            <button onClick={secondtoggle } style={{backgroundColor: (active === "second") ? "#11171c" : "#1d2730"}}>C++ without library</button>
            {show && <CodeComponent />}
            {showSnippet && <SecondCodeComponent/>}
            
            </div>
            <img src={bbsort}></img>
       </div>
    );
}
 
export default BubbleSort;