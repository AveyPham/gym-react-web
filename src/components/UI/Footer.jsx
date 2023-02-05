import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__box'>
                    <div className='logo'>
                        <div className='logo__img'>
                            <img src={logo }/>
                        </div>
                        <h2>FitBody</h2>
                    </div>
                    <p>Walking increases your heart rate, breathing and flow of oxygen.
                    Strength training, which helps increase muscle and bone mass</p>
                </div>

                <div className='footer__box'>
                    <h4 className='footer__title'>Company</h4>
                    <ul className='footer__links'>
                        <li><a>Our programs</a></li>
                        <li><a>Our plan</a></li>
                        <li><a>Become a member</a></li>
                    </ul>
                </div>

                <div className='footer__box'>
                    <h4 className='footer__title'>Quick Links</h4>
                    <ul className='footer__links'>
                        <li><a>About us</a></li>
                        <li><a>Contact us</a></li>
                        <li><a>Support</a></li>
                    </ul>
                </div>


                <div className='footer__box'>
                    <h4 className='footer__title'>Quick Links</h4>
                    <ul className='footer__links'>
                        <li><a>About us</a></li>
                        <li><a>Contact us</a></li>
                        <li><a>Support</a></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>Copyright - {year} developed by. All right reserved </p>
        </div>
    </footer>
  )
}

export default Footer