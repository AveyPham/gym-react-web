import React from 'react'
import '../../styles/exercises.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'


const Exercises = () => {
  return (
    <section id='schedule'>
        <div className='container exercise__container'>
            <div className='exercise__top'>
                <h2 className='section__title'>Benefits of <span className='highlights'>
                    Exercise</span>
                </h2>
                <p>Regular physical activity is one of the most important <br/>
                things you can do for your health. </p>
            </div>
            {/* ====================exercise list============== */}
            <div className='exercise__wrapper'>
                <div className='exercise__item'>
                    <span className='exercise__icon'>
                        <img src={lunges}/>
                    </span>
                    <div className='exercise__content'>
                        <h4>Healthy Life</h4>
                        <p>It helps strengthen your lower body, increase 
                        core strength, muscle tissue and help you get the perfect 
                         buttocks you always hoped for.</p>
                    </div>
                </div>
                <div className='exercise__item'>
                    <span className='exercise__icon'>
                        <img src={yoga}/>
                    </span>
                    <div className='exercise__content'>
                        <h4>Increase Flexibilities</h4>
                        <p>It helps strengthen your lower body, increase 
                        core strength, muscle tissue and help you get the perfect 
                         buttocks you always hoped for.</p>
                    </div>
                </div>
                <div className='exercise__item'>
                    <span className='exercise__icon'>
                        <img src={extended}/>
                    </span>
                    <div className='exercise__content'>
                        <h4>Reducing Blood Pressure</h4>
                        <p>It helps strengthen your lower body, increase 
                        core strength, muscle tissue and help you get the perfect 
                         buttocks you always hoped for.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercises