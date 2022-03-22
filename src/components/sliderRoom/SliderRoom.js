import {useState} from 'react'
import slides from '../../img/slide.jpg'
import WhitePaw from '../../img/icon-paw-orange.svg'
import IconArrowRight from '../../img/icon-arrow.svg'
import IconArrowLeft from '../../img/icon-arrow-left.svg'
import './SliderRoom.scss'



const SliderRoom = () => {

  return (
    <section>
      <h2>Номера</h2>
          <div className="productWrapper">
            <div className="productWrapper__img">
              <img src={slides} alt="#" />
            </div>
            <article className="productWrapper__content">
                <h3>Эконом Люкс</h3>
                <ul>
                  <li>Площадь - 0,90 м2</li>
                  <li>Размеры (ШхГхВ) - 90х100х180 см</li>
                  <li>Цена за сутки: 200₽</li>
                </ul>
                <button className="buttonOrange">Забронировать
                <div className="buttonOrange__iconButtonWhite">
                  <img alt="#" src={WhitePaw}/>
                </div>
              </button>
            </article>
            <div className='WrapperSwitches'>
              <div className='dotSlide'>
                <div className='active'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
              </div>
              <div className="number__arrows">
                <button className="number__arrow" href="###">
                  <img/>
                </button>
                <button className="number__arrow" href="###">
                  <img/>
                </button>
              </div>
            </div>  
					</div>
			</section>
  )
}

export default SliderRoom