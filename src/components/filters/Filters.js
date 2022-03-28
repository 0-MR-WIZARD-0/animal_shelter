import React from 'react'
import { useState } from 'react';
import { RenderCard } from '../cardsRoom/CardsRoom'
import information from '../../json/Data.json'
import WhitePaw from '../../img/icon-paw-orange.svg'

import { NavLink } from 'react-router-dom'
import './Filters.scss'

export const square = [
    '0,63 м2',
    '0,90 м2',
    '1,13 м2',
    '1,56 м2',
    '2,56 м2',
    '2,88 м2'
];

export const equipment = [
    'Пустой номер',
    'Лежак',
    'Когтеточка',
    'Игровой комплекс',
    'Домик'
];

const Filters = () => {

    const renderCheckbox = (props) => {
        
        const checkbox = props.map(item => {
            return (
                <div className='checkbox' key={item}>
                    <label>
                        <input type="checkbox" className='realCheckbox' name={item} onClick={(e)=>CheckingMatches(e)}/>
                         <span className='customCheckbox'></span> {item}
                    </label>
                </div>
            );
        });

        return checkbox;

    }

    const CheckingMatches = (event) => {
        
        const {name, checked} = event.target

        const array = []

        if(checked){

            information.rooms.map(item => {
                if (name===item.square){
                    array.push(item)
                }
            }) 

            console.log(information.rooms);
            console.log(array)

        }
      
    }

    const RenderFilterElement = () => {
        
    }

    const ClearFilter = () => {}

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
                    <button className='buttonFillYellow' onClick={()=>RenderFilterElement()}>Применить</button>
                    <button className='buttonBorderYellow' onClick={()=>ClearFilter()}>Сбросить фильтр</button>
                </div>
            </div>
        </div>
    )
}

export default Filters

