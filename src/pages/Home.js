import './Home.css';
import Img1 from './img/education.png';

const Home = () => {
    return ( 
    <div className="home">
     <div className="typewritter">
      <h1>Witaj na stronie o algorytmach!</h1>
     </div>
     <div className="home-content">
    <img src={Img1} alt='Education' />
    <p><strong>Algorytm</strong> to skończony ciąg jasno zdefiniowanych czynności koniecznych do wykonania pewnego rodzaju zadań, sposób postępowania prowadzący do rozwiązania problemu.</p>
     </div>
    </div>
    
     );
}
 
export default Home;