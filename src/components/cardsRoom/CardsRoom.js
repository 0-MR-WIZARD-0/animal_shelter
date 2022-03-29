import React from 'react'
import WhitePaw from '../../img/icon-paw-orange.svg'
import Filters from '../filters/Filters'
import { NavLink } from 'react-router-dom'
import information from '../../json/Data.json'
import { useState } from 'react';
import './CardsRoom.scss'

export const RenderCard = (cards) => {
    const template = cards.rooms.map(item => 
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

const CardsRoom = () => {

  const [cards, setCards] = useState(()=>RenderCard(information))

//   console.log(cards.props.children);
//   console.log(information);

  return (
    <section>
        <div className='wrapperSort'>
            <h1 className='h1'>Наши номера</h1>
            <div className='form-group'>
                <div className='dropdown'>
                    <button className='dropdown-button'>По площади</button>
                    <ul className='dropdown__List'>
                        <li className='dropdown__ListItemDrop'>По оснащению</li>
                        <li className='dropdown__ListItemDrop'>По цене</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='wrapperOurRoom'>
            <Filters setCards={setCards}/>
            {cards}
        </div>
    </section>
  )
  
}

export default CardsRoom