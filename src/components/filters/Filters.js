import React from 'react'
import './Filters.scss'

const square = [
    '0,63 м2',
    '0,90 м2',
    '1,13 м2',
    '1,56 м2',
    '2,56 м2',
    '2,88 м2'
];

const equipment = [
    'Пустой номер',
    'Лежак',
    'Когтеточка',
    'Игровой комплекс',
    'Домик'
];

const renderCheckbox = (props) => {
    const checkbox = props.map(item => {
        return (
            <div className='checkbox' key={item}>
                <label>
                    <input type="checkbox" className='realCheckbox'/>
                    <span className='customCheckbox'></span> {item}
                </label>
            </div>
        );
    });
    return checkbox;
}

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
                {renderCheckbox(square)}
                </div>
            <p>Оснащение номера</p>
                <div>
                {renderCheckbox(equipment)}
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