import React,{useState,useEffect} from 'react';
import arrow from '/Users/Hp/airark/src/Assets/Vector 1162.png';
import mouse from '/Users/Hp/airark/src/Assets/Group 2344.png';
import styles from '../Home/Home.module.css';
import Drone from '../Drone/Drone';
function Home() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220){
        setIsTrue(true);
      }
      else if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsTrue(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return ( 
    <>
       <div className={styles.arrow}>
        <div className={styles.arrow1}>
        <img src={arrow} className={`arr ${isScrolled ? 'scrolled' : ''}`}/>
        </div>
            <div className={`home ${isTrue ? "move":""} ${styles.textimg} `}>
              <div className={`text ${isScrolled ? 'scrolled' : ''} ${styles.airarkheading}`}>
                <h1 className={styles.heading}>
                  AirArk the Next Generation <br/>
                  Commutation
                </h1>
              </div>
              <div>
                <Drone />
              </div>
            </div>
       <div style={{marginTop : isTrue ? "-150px":""}}>
        <div className={styles.scroll}>
        <p>SCROLL DOWN</p>
        <img src={mouse} className={styles.mouse}/>
        </div>
       </div>
    </div>
    
    </>
  )
}



export default Home
