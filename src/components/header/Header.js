import Koteika from '../../img/koteika.jpg'
import Navbar from '../navbar/Navbar'
import './Header.scss'

const Header = () => {
  return (
    <div>
        <Navbar/>
        <div className='wrapperHeader'>

            <div className='wrapperHeader__content'>
              <p>Санкт-Петербург</p>
              <h1>Котейка</h1>
              <p>Уютная гостиница для котов и кошек</p>
            </div>

          <div className='wrapperHeader__img'>
              <img alt='#' src={Koteika}/>
          </div>
        </div>
    </div>
  )
}

export default Header