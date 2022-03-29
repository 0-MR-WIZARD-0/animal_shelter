import React from 'react'
import { useState } from 'react';
// import { RenderCard } from '../cardsRoom/CardsRoom'
import information from '../../json/Data.json'
import WhitePaw from '../../img/icon-paw-orange.svg'

import { NavLink } from 'react-router-dom'
import './Filters.scss'

let array = []

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

const Filters = ({setCards}) => {

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

        if(checked){

            information.rooms.filter((item) => {
                if (name===item.square){
                       
                    array.push(item) 
                    
                    //  console.log(item);
                }
                
            }) 

            // console.log(information.rooms);
            console.log(array)

            // array.forEach(elem=>{
            //     // console.log(elem);
            //     console.log(elem.id);
            // })

        }
        else{
            
            information.rooms.filter((item) => {
                
            array.filter(checked=>{
                array = []
                // console.log(array);
                // console.log(item.id);
                // console.log(checked.id);
                if(!(name===item.square&&checked.id!==item.id)){
                //    console.log(checked);
                    
                    array.push(checked)
                    
                }
                
            }) 
        })
            console.log(array)
        }
    }

    const Render = (array) => {
        const template = array.map(item => 
            <div key={item.id} className='wrapperOurRoom__gridItem'>
                <div className='wrapperOurRoom__itemImg'>
                    <img alt="#" src={item.img}/>
                </div>
                <div className="wrapperOurRoom__gridItemInfo">
                    <h3>{item.title}</h3>
                    <p>Размеры (ШхГхВ) - {item.sizes}</p>
                    <p>Площадь - {item.square}</p>
                    <p>Оснащение номера: {item.equipment}</p>
                    <p>Цена за сутки: {item.price}</p>
                </div>
                <NavLink to="/SelectedRoom"><button className="buttonOrange">Забронировать
                    <div className="buttonOrange__iconButtonWhite">
                        <img alt="#" src={WhitePaw}/>
                    </div>
                </button></NavLink>
            </div>
        )
        return (
           <div className='wrapperOurRoom__grid'>
                {template}
           </div> 
        )
    }

    const RenderFilterElement = (array) => {
        
        // setCards(<div>Иванов долбаеб</div>)

        // console.log(array);
        setCards(()=>Render(array))
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
                    <button className='buttonFillYellow' onClick={()=>RenderFilterElement(array)}>Применить</button>
                    <button className='buttonBorderYellow' onClick={()=>ClearFilter()}>Сбросить фильтр</button>
                </div>
            </div>
        </div>
    )
}

export default Filters

