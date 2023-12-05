import React from 'react';
import styles from '../Future/Future.module.css';
import vfx from 'C:/Users/Hp/airark/src/Assets/video.mp4'
import jetplane from '/Users/Hp/airark/src/Assets/jetplane.png';
import ellipse1 from '/Users/Hp/airark/src/Assets/Ellipse1.png';
import ellipse2 from '/Users/Hp/airark/src/Assets/Ellipse2.png';
import ellipse3 from '/Users/Hp/airark/src/Assets/Ellipse3.png';
import future from '/Users/Hp/airark/src/Assets/FUTURE.png';
import never from '/Users/Hp/airark/src/Assets/NEVER LATE.png';
const Future = () => {
  // const videoStyle = {
  //   borderRadius: '100px',
  // };
  return (
    <>
    <div className={styles.main}>
    <div className={styles.frst}>
        {/* <img src={future} /> */}
        <h1>FUTURE</h1>
    </div>
      <div className={styles.container}>
        {/* <div className={styles.Future}> */}
        <video  className={styles.video} autoPlay loop>
      <source src={vfx} type="video/mp4"/>
     </video>
          <div className={styles.ellipse}>
          <img src={ellipse1} className={styles.ellipse1}/>
          <img src={ellipse2} className={styles.ellipse2}/>
          <img src={ellipse3} className={styles.ellipse3}/>
        {/* </div> */}
        </div>
        {/* <img src={vfx} className={styles.vfx}/> */}
      </div>
      <div className={styles.scnd}>
      <div className={styles.ellipses}>
          <img src={ellipse1} className={styles.ellipse1}/>
          <img src={ellipse2} className={styles.ellipse2}/>
          <img src={ellipse3} className={styles.ellipse3}/>
          </div>
        <h1>NEVER LATE</h1>
        {/* <img src={never} /> */}
      </div>
      <div className={styles.jetcontainer}>
        <div>
            <div className={styles.line}>
            </div>
        </div>
            <img src={jetplane} className={styles.jetplane}/>
        
        <div>
            <p className={styles.paragraph}>"its nonsense allows the eye to focus only on the graphic layout objectivelly evaluting the stylistic choices of a project"</p>
        </div>
      </div>
    </div>

    </>
  );
}

export default Future;
