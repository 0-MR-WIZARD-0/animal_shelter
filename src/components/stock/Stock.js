import React from 'react'
import Banner from '../../img/banner-tablet@1x.jpg'
import OrangePaw from '../../img/icon-paw-white.svg'
import './Stock.scss'

const Stock = () => {
  return (
      <section className='wrapperStock'>
        <div className='wrapperStock__content'>
              <h3>Каждый 7-й день<br/>бесплатно!</h3>
              <p>Акция действует при размещении<br/>в номерах "Люкс" и "Супер-Люкс"</p>
              <button className="buttonWhite">Забронировать
                <div className="buttonWhite__iconOrange">
                  <img alt="#" src={OrangePaw}/>
                </div>
              </button>
        </div>
        <div className='wrapperStock__img'>
            <img alt="#" src={Banner}/>
        </div>
      </section>
    
  )
}

export default Stock