import { useState, useEffect } from "react";
import CodeInsert from "./code_sections/CodeInsert";
import './InsertionSort.css';
import video1 from './img/insertion_sort.mp4';
import Img4 from './img/loading.svg';

const InsertionSort = () => {

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
               <div className="insert_sort">
                {isLoading && <div className="loading"><img src={Img4}/></div> }
                <h1>Insertion sort - sortowanie przez wstawianie</h1>
                <div className="main">
                <div className="section_is">
                    <p>Zasada działania odzwierciedla sposób w jaki ludzie ustawiają karty – kolejne elementy wejściowe są ustawiane na odpowiednie miejsca docelowe. Tworzymy specjalną zmieną, która "przetrzymuje" dane do posortowania. Sortowanie idzie od prawej do lewej strony.</p>
                </div>
                <div className="information_is">
                        <p><strong>Złożoność czasowa</strong> O(n^2)</p>
                        <p><strong>Złożoność pamięciowa</strong> O(1)</p>
                    </div>
                    </div>
                <div className="component_bs">
                <button onClick={toggle} style={{backgroundColor: (active === "first") ? "#11171c" : "#1d2730"}}>C++ with library</button>
                    <CodeInsert />
                </div>
               <video src={video1} muted autoplay="autoplay" />
               </div>
             );
        }
         
    
 
export default InsertionSort;