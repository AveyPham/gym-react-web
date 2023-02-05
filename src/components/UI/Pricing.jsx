import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
  return (
    <section id='pricing'>
        <div className='container'>
            <div className='pricing__top'>
                <h2 className='section__title'>Gym <span className='highlights'>Pricing</span> Plan</h2>
                <p>Your gym workout routine must be set in sync with your purpose. 
                Whether<br/> you plan to shed the extra weight gained during the 
                work-from-home era.</p>
            </div>
            {/* =======pricing wrapper */}
            <div className='pricing__wrapper'>
                <div className='pricing__item'>
                    <div className='pricing__card-top'>
                        <h2 className='section__title'>Regular Member</h2>
                        <h2 className='pricing section__title'>50$ <span>/month</span></h2>
                    </div>
                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Unlimited access to the gym</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Customer support</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Personal trainer</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Standard options</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>5 classes per week</span></li> 
                        </ul>
                        <button className='register__btn'>Join Nowa</button>
                    </div>
                </div>

                <div className='pricing__item pricing__item-02'>
                    <div className='pricing__card-top'>
                        <h2 className='section__title'>Premium Member</h2>
                        <h2 className='pricing section__title'>70$ <span>/month</span></h2>
                    </div>
                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Unlimited access to the gym</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Customer support</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Personal trainer</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Standard options</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>5 classes per week</span></li> 
                        </ul>
                        <button className='register__btn'>Join Nowa</button>
                    </div>
                </div>

                <div className='pricing__item'>
                    <div className='pricing__card-top'>
                        <h2 className='section__title'>Standard Member</h2>
                        <h2 className='pricing section__title'>100$ <span>/month</span></h2>
                    </div>
                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Unlimited access to the gym</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Customer support</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Personal trainer</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>Standard options</span></li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i>5 classes per week</span></li> 
                        </ul>
                        <button className='register__btn'>Join Nowa</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing