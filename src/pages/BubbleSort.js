import './BubbleSort.css';
import 'animate.css';
import bbsort from './img/bbsort.gif';
import React, { useState, useEffect, useRef } from "react";
import { CopyBlock } from "react-code-blocks";
import CodeComponent from './CodeComponent';

const BubbleSort = () => {


    return ( 
        <div className="bubble-sort">
            <div className="header-bb">
            <h1 class="animate__animated animate__zoomIn">Bubble Sort - sortowanie babelkowe</h1>
            </div>
            
            <h3>1. Co to jest?</h3>
           
               <li>Porównuje ona dwa kolejne elementy i w zależności od argumentu zamienia ich kolejności. Sortowanie się konczy, kiedy podczas nastapnęgo przejścia nie dokonano żadnej zmiany.</li>
         
            <h3>2. Złożoność czasowa</h3>
          
                <li>Wykorzystuje złożoność czasową O(n)<sup>2</sup></li>

            <img src={bbsort} alt="Bubble Sort" />
            <h3>3. Przykładowy kod</h3>
            <CodeComponent></CodeComponent>
                <li>W powyższym przykładzie mamy tablicę pięcioelementową. Dane po uporządkowaniu mają się wyświetlić w kolejności od najmniejszej do największej.</li>
       </div>
    );
}
 
export default BubbleSort;