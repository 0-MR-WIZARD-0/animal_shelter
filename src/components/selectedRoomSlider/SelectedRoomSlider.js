import React from 'react'
import './SelectedRoomSlider.scss'

const SelectedRoomSlider = () => {
  return (
    <section>
        <h2>Выбранный номер</h2>
        <div className='SliderRoomSelected'>
            <div>
                <div className='SliderRoomSelected__item'></div>
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
            </div>
        </div>
        
    </section>
  )
}

export default SelectedRoomSlider