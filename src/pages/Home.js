import './Home.css';
import Img1 from './img/education.png';
import Img2 from './img/time.png';
import Img3 from './img/scheme.png';
import {useState, useEffect} from 'react';
import Img4 from './img/loading.svg';
const Home = () => {

    const [isLoading, setisLoading] = useState(false);


    useEffect(() => {
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
        }, 1000)
    }, []);

    return ( 
    <div className="home">
        {isLoading && <span><div className="loading"><img src={Img4}/></div></span> }
     <div className="typewritter">
     <h1>Witaj na stronie o algorytmach!</h1>
     </div>
     <div className="home-content">
    <img src={Img1} alt='Education' />
    <p><strong>Algorytm</strong> to skończony ciąg jasno zdefiniowanych czynności koniecznych do wykonania pewnego rodzaju zadań, sposób postępowania prowadzący do rozwiązania problemu. <a href="https://panthema.net/2013/sound-of-sorting/">Tutaj</a> możemy znaleźć fajny program do wizualizacji algorytmów.</p>
     </div>
     <div className="home-column">
      <div className="rows">
     <img src={Img2} alt='Time' />
     <h3>Złożoność obliczeniowa</h3>
     <li>Głównym celem jest określanie ilości zasobów potrzebnych do rozwiązania problemów obliczeniowych. Rozważanymi zasobami są takie wielkości jak czas, pamięć lub liczba procesorów.</li>
     </div>
     <div className="rows">
     <img src={Img3} alt='Scheme' />
     <h3>Sposób przedstawiania</h3>
     <li>Możemy przedstawić na podstawie listy kroków, schematu blokowego, pseudokodu lub za pomocą opisu słownego</li>
     </div>
     </div>
    </div>
    
     );
}
 
export default Home;