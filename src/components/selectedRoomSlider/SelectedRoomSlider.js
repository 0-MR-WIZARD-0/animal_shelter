import React from 'react'
import './SelectedRoomSlider.scss'
import slide from '../../img/slide.jpg'
import WhitePaw from '../../img/icon-paw-orange.svg'

const SelectedRoomSlider = () => {
  return (
    <section>
        <h2>Выбранный номер</h2>
        <div className='SliderRoomSelected'>
            <div className='SliderRoomSelected__flexRoom'>
                <div className='SliderRoomSelected__flex'>
                    <div className='SliderRoomSelected__flexItem'>
                        <img alt="#" src={slide}/>
                    </div>
                    <div className='SliderRoomSelected__flexItem'>
                        <img alt="#" src={slide}/>
                    </div>
                    <div className='SliderRoomSelected__flexItem'>
                        <img alt="#" src={slide}/>
                    </div>
                </div> 
                <div className='SliderRoomSelected__itemSelect'>
                    <img alt="#" src={slide}/>
                </div> 
            </div>
            <div>
                <h1>Супер-Люкс</h1>
                <p>Размеры(ШхГхВ) - 180х160х180 см</p>
                <p>Площадь - 2,88 м2</p>
                <p>Оснащение номера</p>
                <ul>
                    <li>Лежак</li>
                    <li>Домик</li>
                    <li>Игровой комплекс</li>
                    <li>Когтеточка</li>
                </ul>
                <p>Цена за сутки: 600 ₽</p>
                <button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button>
            </div>
        </div>
        
    </section>
  )
}

export default SelectedRoomSlider