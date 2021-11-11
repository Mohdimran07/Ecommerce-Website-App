import "./Footer.css";
import yt from './../../pics/yt.jpg'
import sl from './../../pics/sl.png'
import fb from './../../pics/fb.png'

const Footer = () => {
  return (
    // <footer className="main-footer">
    //   <div className="container">
    //     <div className="footer-title">
    //       <h1>The Generics</h1>
    //     </div>
    //     <div className="footer-icons">
    //       <ul >
    //         <li>
    //           <a href="https://www.youtube.com">
    //             youtube
    //             {/* <img
    //               src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
    //               alt
    //             /> */}
    //           </a>
    //         </li>
    //         <li>Spotify</li>
    //         <li>FaceBook</li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
    <footer>
      
        <div class="footer-title">The Generics</div>
        <div class="footer-icons">
          <ul>
            <li>
              <a href="https://www.youtube.com">
                <img src={yt} height="33" width="35" alt="" />
              </a>
            </li>
            <li>
              <a href="https://spotify.com">
                <img src={sl} height='33' width='35' alt="" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <img src={fb} height='33' width='35' alt="" />
              </a>
            </li>
          </ul>
        </div>
      
    </footer>
  );
};

export default Footer;
