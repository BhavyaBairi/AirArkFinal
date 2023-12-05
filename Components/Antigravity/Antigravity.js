import React , { useEffect , useState } from 'react';
// import text from '/Users/Hp/airark/src/Assets/airarknn.png';
import styles from '../Antigravity/Antigravity.module.css';
import arrow from '/Users/Hp/airark/src/Assets/airarkmid.png';
import animation from '/Users/Hp/airark/src/Assets/animation.gif';
import background from 'C:/Users/Hp/airark/src/Assets/backgroundvideo.mp4';
import build from '/Users/Hp/airark/src/Assets/building.png';
import bubble from '/Users/Hp/airark/src/Assets/bubble.png';
import drone2 from '/Users/Hp/airark/src/Assets/drone2.png';
import drone3 from '/Users/Hp/airark/src/Assets/drone3.png';
import drone4 from '/Users/Hp/airark/src/Assets/drone4.png';
import drone from '/Users/Hp/airark/src/Assets/drone.gif';
const Antigravity = () => {
  const [imageVisible, setImageVisible] = useState(true);
  const handleClick = () => {
    setImageVisible(false);
    setTimeout(() => {
      setImageVisible(true);
    }, 1000);
  }
  return (
    <>
    <div className={styles.airarkpg}>
    <div className={styles.animation}>
  <img src={animation}/>
</div>
<div className={styles.arrow}>
        <img src={arrow}/>
</div>
    <div className={styles.airark}>
      <div className={styles.mask1}>
        <video width="100%" height="100%" autoPlay muted loop>
          <source src={background} />
        </video>
      </div>
    </div>

    <div className={styles.build}>
      <div className={styles.drones}>
        <img src={drone2} height="50" width="60" className={styles.drone2}/>
        <img src={drone4} height="50" width="50" className={styles.drone4} />
        <img src={drone3} height="50" width="50" className={styles.drone3}/>
      </div>
      <img src={build} className={styles.buildimg}/>
    </div>
    <div className={styles.bubble}>
      <img src={drone} className={styles.drone} height="300" width="300"/>
      {imageVisible ? (
        <img src={bubble} height="500" width="500" className={styles.bubbleimg} onClick={handleClick} />
      ) : null}
    </div>
    <div className={styles.bg}>
      <h1>Anti-Gravitational Propulsion System</h1>
      <br/>
      <br/>
      <p>Aliquam vestibulum convallis odio, sed lacinia quam elementum nec. Mauris ante sem,
fermentum nec vehicula eget, blandit non ipsum. Suspendisse quis facilisis orci, sit amet maximus mauris.
Sed aliquam id dolor eget pulvinar. Ut luctus sem ac feugiat faucibus.</p>
    </div>
    </div> 
    </>
  );
}

export default Antigravity;
