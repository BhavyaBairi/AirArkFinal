import React , { useState , useEffect } from 'react';
import jet from '/Users/Hp/airark/src/Assets/jetspecimage 1.png';
import styles from '../Home/Home.module.css';
const Drone = () => {
    const [showImage, setShowImage] = useState(false);
    const [isSmall, setIsSmall] = useState(false);

    // const handleClick = () => {
    //   setIsSmall(!isSmall);
    // }
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if(scrollPosition > 200){
          setIsSmall(true);
        }
        else if (scrollPosition > 150){
            setIsSmall(true);
        }
        else if (scrollPosition > 100) {
          setShowImage(true);
        } else {
          setShowImage(false);
          setIsSmall(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={styles.jetplane}>
         <img src={jet} alt="Jet"  className={`jet jet1 ${showImage ? "showed" : ""} ${isSmall ? "small" : ""} `} />
      </div>
    )
}

export default Drone;
