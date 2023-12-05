import React from 'react';
import styles from '../Vertical/Vertical.module.css';
import drone1 from '/Users/Hp/airark/src/Assets/drone1.png';
import animation1 from 'C:/Users/Hp/airark/src/Assets/animation1.gif';
import animation2 from 'C:/Users/Hp/airark/src/Assets/animation2.gif';
import animation3 from 'C:/Users/Hp/airark/src/Assets/animation4.gif';
import animation4 from 'C:/Users/Hp/airark/src/Assets/animation41.gif';
import animation5 from 'C:/Users/Hp/airark/src/Assets/animation5.gif';
// import 'react-lazy-load-image-component/src/effect/blur.css';

const Vertical = () => {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.overall}>
          <div className={styles.first}>
                    <div>
                      <h5>100 - 150</h5>
                      <h5>MILE MAX RANGE</h5>
                    </div>
                    <div>
                      <h5 className={styles.dba}>DBA 50</h5>
                    </div>
                    <div>
                      <h5>VERTICAL TAKEOFF</h5>
                      <h5>AND LANDING</h5>
                    </div>
          </div>
        
          <div className={styles.secnd}>
            <img loading='lazy' src={animation1} className={styles.animation}/>
            <img loading='lazy' src={animation2} className={styles.animation}/>
            <img loading='lazy' src={animation3} className={styles.animation}/>
            <img loading='lazy' src={animation4} className={styles.animation}/>
            <img src = {animation5} className={styles.animation} />
            {/* <video>
              <source src={animation1}/>
            </video> */}
          </div>

          <div className={styles.third}>
              <div>
                <h5>ZERO EMISION</h5>
              </div>
              <div>
                <h5>SPEED UPTO 200 MPH</h5>
              </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Vertical;
