import React , { useRef , useState , useEffect } from 'react';
import styles from '../Einsten/Einsten.module.css';
import einstenbg from '/Users/Hp/airark/src/Assets/eistenbg.mp4';
import einsten from '/Users/Hp/airark/src/Assets/eisten.mp4';
import einstenvideo from 'C:/Users/Hp/airark/src/Assets/einstenvideo.mp4'; 
import logo from '/Users/Hp/airark/src/Assets/logo.png';
const Einsten = () => {
  // const [isClicked, setIsClicked] = useState(false);
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.01) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.01 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const boxStyle = {
    width: isVisible ? '80vw' : '80vw',
    height: isVisible ? '85vh' : '10vh',
    marginTop: isVisible ? "-600px":'-38px',
    transition: 'all 2s ease-in'
  };
  
  return (
    <>
      <div className={styles.background}>
        <div className={styles.text1}>
            <p className={styles.heading}>"THE FUTURE IS COMING"</p>
            <h1 className={styles.subheading}><img src = {logo} /></h1>
        </div>
      </div>
      <div className={styles.function}>
        <div className={`${isVisible ? "boxStyle":""} ${styles.click}`} style={boxStyle} ref={targetRef}>
        {isVisible ? (
          <div style={{"display":"flex","flex-direction":"row","justify-content":"center"}}>
        <video autoPlay loop className={styles.video} >
          <source src={einstenvideo}/>
        </video>
        </div>
      ): null }
        </div>
      </div>
    </>
  );
}

export default Einsten;
