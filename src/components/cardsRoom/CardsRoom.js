import React from 'react'
import WhitePaw from '../../img/icon-paw-orange.svg'
import Filters from '../filters/Filters'
import { NavLink } from 'react-router-dom'
import information from '../../json/Data.json'
import './CardsRoom.scss'

const RenderCard = () => {
    const template = Object.keys(information.rooms).map(item => 
        <div key={information.rooms[item].id} className='wrapperOurRoom__gridItem'>
            <div className='wrapperOurRoom__itemImg'>
                <img alt="#" src={information.rooms[item].img}/>
            </div>
            <div className="wrapperOurRoom__gridItemInfo">
                <h3>{information.rooms[item].title}</h3>
                <p>Размеры (ШхГхВ) - {information.rooms[item].sizes}</p>
                <p>Площадь - {information.rooms[item].square}</p>
                <p>Оснащение номера: {information.rooms[item].equipment}</p>
                <p>Цена за сутки: {information.rooms[item].price}</p>
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
            <Filters/>
            {RenderCard()}
        </div>
    </section>
  )
  
}

export default CardsRoom