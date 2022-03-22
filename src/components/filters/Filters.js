import React from 'react'
import './Filters.scss'

const Filters = () => {
  return (
    <div>
        <div className='wrapperFilter'>
            <p>Цена за сутки, ₽</p>
            <div className='wrapperFilter__price'>
                <input className='inputField' placeholder='от 100'></input>
                <input className='inputField' placeholder='до 2000'></input>
            </div>
            <p>Площадь</p>
            <div>
                <div>
                    <label>
                        <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> 0,63 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> 0,90 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> 1,13 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> 1,56 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> 2,56 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> 2,88 м2
                    </label>
                </div>
            </div>
            <p>Оснащение номера</p>
            <div>
            <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> Пустой номер
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> Лежак
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> Когтеточка
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> Игровой комплекс
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='realCheckbox'/>
                        <span className='customCheckbox'></span> Домик
                    </label>
                </div>
            </div>
            <div className='wrapperFilter__button'>
                <button className='buttonFillYellow'>Применить</button>
                <button className='buttonBorderYellow'>Сбросить фильтр</button>
            </div>
        </div>
    </div>
  )
}

export default Filters