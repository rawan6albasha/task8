import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF, faBehance } from '@fortawesome/free-brands-svg-icons';

import '../assets/style/footerCom.css'

function FooterCompo() {
    return (
        <div className='body'>
        <div className="flex-row ">

<div className='colu-1'>


<div className='img'>
    <img src="/src/assets/img/logo.png"/>
    </div>
    <p className='flex-colu' >
     <p className="bold-1 head">Head Office</p> 
    <a href="https://maps.app.goo.gl/Qwp6NNGQ9Q3P79DaA">Syria - Latakia - GRH2+HJX35.5199518</a>
          </p>
         

    </div>
    {/* -------------------------------------------------------------------------------------- */}
    <div className='colu-2'>

          <span className="bold-1 "> Sales</span>
          <p>contact@focal-x.com</p>
          <a href="tel:+963 953 666 056">+963 953 666 056 </a><br/>

          <span className="bold-1 ">Public Relations</span>
          <p>pr@focal-x.com </p>
          <a href="tel:+963 953 666 052">+963 953 666 052</a>

    </div>
    {/* -------------------------------------------------------------------------------------- */}
    <div className='colu-3'>
    <div>
          <span className="bold-1 "> Customer Support</span>
          <p>info@focal-x.com</p>
            <a href="tel:+963 953 666 054">+963 953 666 054</a>
          


          <span className="bold-1">Human Resources</span><p>hr@focal-x.com</p>
        </div>
    </div>
     {/* -------------------------------------------------------------------------------------- */}
    <div className='colu-4'>
      
          <span className="bold-1"> Useful Links</span>
         <p> Clients &amp; Partners </p>
         <p> Check Certificat ID</p>
         <p>Check for employee</p>
         <p>Our Brand ID guidlines</p>
  

    </div>
     {/* -------------------------------------------------------------------------------------- */}
    <div className='colu-5'>

          <span className="bold-1 "> Keep In Touch </span>  
          <ul className='flex-row link'>
                        <li><a href='https://www.facebook.com/focal.x.agency/'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href='https://www.behance.net/focal-x-agency'><FontAwesomeIcon icon={faBehance} /></a></li>
                        <li><a href='https://www.linkedin.com/company/focal-x-agency'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        <li><a href='https://www.instagram.com/focal.x.agency/'><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://twitter.com/focal_x_agency"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>

    </div>

      {/* -------------------------------------------------------------------------------------- */}
        </div>
        <div className='flex-row'>
        <p><FontAwesomeIcon icon={faCopyright} className="copy" />  2021 - 2023 focal X L.L.C All Right Reserved</p>
           <hr/>     
</div>
        </div>
    )
}
export default FooterCompo