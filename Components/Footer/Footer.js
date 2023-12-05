import React , { useState ,useEffect } from 'react';
import styles from '../Footer/Footer.module.css';
import insta from '/Users/Hp/airark/src/Assets/insta.png';
import fb from '/Users/Hp/airark/src/Assets/facebook.png';
import twitter from '/Users/Hp/airark/src/Assets/twitter.png';
import linkedin from '/Users/Hp/airark/src/Assets/linkedin.png';
import youtube from '/Users/Hp/airark/src/Assets/youtube.png';
import top from '/Users/Hp/airark/src/Assets/top.png';
const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <>
      <div className={styles.overall}>
        <div className={styles.bg}>
            <div className={styles.toprow}>
                <div className={styles.text}>
                    <h1>Send  Us a Signal</h1>
                </div>
                <div className={styles.text1} style={{"padding-bottom":"40px","padding-top":"50px"}}>
                    <h5 className={styles.follow}>Follow us</h5>
                    <div className={styles.icons}>
                        <img src={insta}/>
                        <img src={fb}/>
                        <img src={twitter}/>
                        <img src={linkedin}/>
                        <img src={youtube}/>
                    </div>
                </div>
            </div>
            <div className={styles.scndrow}>
                <div className={styles.updts}>
                    <h7>Company</h7>
                    <p className={styles.para}>Investors</p>
                    <p>Careers</p>
                    <p>Partnerships</p>
                    <p>Contact Us</p>
                    <p className={styles.envirnmnt}>Environmental Social Governance</p>
                    <p>FAQ</p>
                </div>
                <div className={styles.updts}>
                    <h7>AirCraft</h7>
                    <p className={styles.para}>Midnight</p>
                    <p>Technologies</p>
                    <p>Certification</p>
                    <p>Safety</p>
                </div>
                <div className={styles.updts}>
                   <h7>To recieve updates</h7>
                   <div className={styles.submit}>
                    <div className={styles.frstbrd}>
                        <p className={styles.mail}>Enter your Mail ID</p>
                    </div>
                    <div className={styles.scndbrd}>
                        <p>Submit</p>
                    </div>
                   </div>
                   <p style={{"padding-top":"20px"}} className={styles.rcepdtxt}>'To Know latest updates and to join hads with us.We get back you - Team Airark'</p>
                </div>
            </div>

            <div className={styles.App} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.content__text}>
              
              <div className={` ${isHovering ? 'cursor' : ''}`} style={{         
                 top: `${mousePosition.y - 400}px`,
                left: `${mousePosition.x - 300}px`,
                backgroundColor:"gray",
                 filter: 'blur(50px)',}}>
                 </div>
                <h1 className={styles.title}>
                AIRARK
              </h1>
            </div>
          </div>
        </div>
      </div>

        <div className={styles.thrdrow} style={{"padding-top":"50px"}}>
                <div className={styles.updts} style={{"margin-left":"100px"}}>
                    <h7>Leagal</h7>
                    <p className={styles.para}>Privacy Policy</p>
                    <p>Website Terms of use</p>
                    <p>Supplier Terms & Conditions</p>
                    <p>Supplier Quality Requirements</p>
                </div>
                <div className={styles.updts} style={{"margin-left":"250px"}}>
                    <h7>Media</h7>
                    <p className={styles.para}>News</p>
                    <p>Media Inquiries</p>
                </div>
            </div>
                <div className={styles.top}>
                  <img src={top} onClick = {scrollToTop}/>
                </div>
              <div className={styles.hr}>
                <hr/>
                <div>
                    <p className={styles.copy}>Copyrights © All rights reserved 2023 Tekkr Innovations AIRARK pvt ltd </p>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
