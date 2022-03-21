import React from 'react'
import './Filters.scss'

const Filters = () => {
  return (
    <div>
        <div className='wrapperFilter'>
            <p>Цена за сутки, ₽</p>
            <div className='wrapperFilter__price'>
                <input className='inputFitld' placeholder='от 100'></input>
                <input className='inputFitld' placeholder='до 2000'></input>
            </div>
            <p>Площадь</p>
            <div>
                <div>
                    <label>
                        <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> 0,63 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> 0,90 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> 1,13 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> 1,56 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> 2,56 м2
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> 2,88 м2
                    </label>
                </div>
            </div>
            <p>Оснащение номера</p>
            <div>
            <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> Пустой номер
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> Лежак
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> Когтеточка
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> Игровой комплекс
                    </label>
                </div>
                <div>
                    <label>
                    <input type="checkbox" className='real-checkbox'/>
                        <span className='custom-checkbox'></span> Домик
                    </label>
                </div>
            </div>
            <button>Применить</button>
            <button>Сбросить фильтр</button>
        </div>
    </div>
  )
}

export default Filters