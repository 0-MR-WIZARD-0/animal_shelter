import React from 'react'
import Economy from '../../img/economy.jpg'
import EconomyPlus from '../../img/economy-plus.jpg'
import Comfort from '../../img/comfort.jpg'
import Suite from '../../img/suite.jpg'
import Lux from '../../img/lux.jpg'
import SuperLux from '../../img/lux-super.jpg'
import WhitePaw from '../../img/icon-paw-orange.svg'
import Filters from '../filters/Filters'
import './CardsRoom.scss'

const CardsRoom = () => {
  return (
    <section>
        <div className='wrapperSort'>
            <h1 className='h1'>Наши номера</h1>
            <div className='form-group'>
                <div className='dropdown'>
                <button className='dropdown-button'>По площади</button>
                <ul className='dropdownList'>
                    <li className='dropdownListItem'>По оснащению</li>
                    <li className='dropdownListItem'>По цене</li>
                </ul></div>
            </div>
        </div>
        <div className='wrapperOurRoom'>
        <Filters/>
        <div className='wrapperOurRoom__grid'>
            <div className='wrapperOurRoom__item'>
                <div className='wrapperOurRoom__itemImg'>
                    <img alt="#" src={Economy}/>
                </div>
                <div className='wrapperOurRoom__itemInfo'>
                    <h3>Эконом</h3>
                    <p>Размеры (ШхГхВ) - 90х70х180 см</p>
                    <p>Площадь - 0,63 м2</p>
                    <p>Оснащение номера: отсутствует</p>
                    <p>Цена за сутки: 100 ₽</p>
                </div>
                <button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button>
            </div>
            <div className='wrapperOurRoom__item'>
                <div className='wrapperOurRoom__itemImg'>
                    <img alt="#" src={EconomyPlus}/>
                </div>
                <div className='wrapperOurRoom__itemInfo'>
                    <h3>Эконом плюс</h3>
                    <p>Размеры (ШхГхВ) - 90х100х180 см</p>
                    <p>Площадь - 0,90 м2</p>
                    <p>Оснащение номера: лежак, когтеточка</p>
                    <p>Цена за сутки: 200 ₽</p>
                </div>
                <button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button>
            </div>
            <div className='wrapperOurRoom__item'>
                <div className='wrapperOurRoom__itemImg'>
                    <img alt="#" src={Comfort}/>
                </div>
                <div className='wrapperOurRoom__itemInfo'>
                    <h3>Комфорт</h3>
                    <p>Размеры (ШхГхВ) - 100х125х180 см</p>
                    <p>Площадь - 1,13 м2</p>
                    <p>Оснащение номера: лежак, когтеточка, игровой комплекс</p>
                    <p>Цена за сутки: 250 ₽</p>
                </div>
                <button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button>
            </div>
            <div className='wrapperOurRoom__item'>
                <div className='wrapperOurRoom__itemImg'>
                    <img alt="#" src={Suite}/>
                </div>
                <div className='wrapperOurRoom__itemInfo'>
                    <h3>Эконом</h3>
                    <p>Размеры (ШхГхВ) - 125х125х180 см</p>
                    <p>Площадь - 1,56 м2</p>
                    <p>Оснащение номера: лежак, когтеточка, игровой комплекс</p>
                    <p>Цена за сутки: 350 ₽</p>
                </div>
                <button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button>
            </div>
            <div className='wrapperOurRoom__item'>
                <div className='wrapperOurRoom__itemImg'>
                    <img alt="#" src={Lux}/>
                </div>
                <div className='wrapperOurRoom__itemInfo'>
                    <h3>Люкс</h3>
                    <p>Размеры (ШхГхВ) - 160х160х180 см</p>
                    <p>Площадь - 2,56 м2</p>
                    <p>Оснащение номера: лежак, когтеточка, игровой комплекс, домик</p>
                    <p>Цена за сутки: 500 ₽</p>
                </div>
                <button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button>
            </div>
            <div className='wrapperOurRoom__item'>
                <div className='wrapperOurRoom__itemImg'>
                    <img alt="#" src={SuperLux}/>
                </div>
                <div className='wrapperOurRoom__itemInfo'>
                    <h3>Эконом</h3>
                    <p>Размеры (ШхГхВ) - 180х160х180 см</p>
                    <p>Площадь - 2,88 м2</p>
                    <p>Оснащение номера: лежак, когтеточка, игровой комплекс, домик</p>
                    <p>Цена за сутки: 600 ₽</p>
                </div>
                <button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CardsRoom