import Koteika from '../../img/koteika.jpg'
import OrangePaw from '../../img/icon-paw-white.svg'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='wrapperHeader'>
            <div className='wrapperHeader__content'>
              <p>Санкт-Петербург</p>
              <h1>Котейка</h1>
              <p>Уютная гостиница для котов и кошек</p>
              <NavLink to="/OurRoom"><button className="buttonWhite">Забронировать
                <div className="buttonWhite__iconOrange">
                  <img alt="#" src={OrangePaw}/>
                </div>
              </button></NavLink>
            </div>
          <div className='wrapperHeader__img'>
              <img alt='#' src={Koteika}/>
          </div>
        </div>
    </div>
  )
}

export default Header