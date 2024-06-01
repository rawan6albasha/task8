// src/components/HeaderCombo.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF, faBehance } from '@fortawesome/free-brands-svg-icons';
import '../assets/style/Header.css';

function HeaderCombo() {
    return (
        <div className="header-container">
            <div className="text-column">
                <h2>Hey !! Mario still here, But don’t forget that</h2>
                <p>
                    At focal X agency, we are working to build something different. Here you’ll have a group of creative people who specialize in:
                    Branding, Digital Marketing, Web/App Development, UI/UX
                    Content creation, Graphic design, Social media and More...
                    So you can take a tour in our website, OR just <b> Press Start</b> :)
                </p>
            </div>
            <div className="image-column">
                <img className="footer" src="/src/assets/img/footer-mobile.png" alt="Footer Mobile" />
                <img className="pattern" src="/src/assets/img/pattren.png" alt="Pattern" />
                <a className='start-link' href="https://www.focal-x.com/mario">Start</a>
                <img className="game" src="/src/assets/img/gameBoy-min.png" alt="Game Boy" />
                <img className="start" src="/src/assets/img/pressStart (1).svg" alt="Press Start" />
                <div className='foot-down'>
                    <ul>
                        <li><a href='https://www.facebook.com/focal.x.agency/'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href='https://www.behance.net/focal-x-agency'><FontAwesomeIcon icon={faBehance} /></a></li>
                        <li><a href='https://www.linkedin.com/company/focal-x-agency'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        <li><a href='https://www.instagram.com/focal.x.agency/'><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://twitter.com/focal_x_agency"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                    <p><FontAwesomeIcon icon={faCopyright} className="copy" /> 2021 - 2022 focal X agency All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderCombo;
