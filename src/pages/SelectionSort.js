import { useState, useEffect } from "react";
import CodeSelection from "./code_sections/CodeSelection";
import './SelectionSort.css';
import selection_sort from './img/selection_sort.gif';
import Img4 from './img/loading.svg';

const SelectionSort = () => {

    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
        }, 1000)
    }, []);




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
       <div className="selection_sort">
          {isLoading && <div className="loading"><img src={Img4}/></div> }
        <h1>Selection sort - sortowanie przez wybieranie</h1>
        <div className="main">
        <div className="section_ss">
            <p>Wybiera najmniejszy (lub największy) element z nieposortowanej części listy lub tablicy i przemieszcza ten element do posortowanej części tablicy. Algorytm utrzymuje dwie podtablice w tablicy: nieposortowaną i posortowaną.</p>
        </div>
        <div className="information_ss">
                <p><strong>Złożoność czasowa</strong> O(n^2)</p>
            </div>
            </div>
        <div className="component_bs">
        <button onClick={toggle} style={{backgroundColor: (active === "first") ? "#11171c" : "#1d2730"}}>C++ with library</button>
           
            <CodeSelection />
        </div>
        <div className="ig">
        <img src={selection_sort}></img>
        </div>
       </div>
     );
}
 
export default SelectionSort;