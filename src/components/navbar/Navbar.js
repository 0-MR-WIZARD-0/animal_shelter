import './Navbar.scss'
import Logo from '../../img/logo.svg'

const Navbar = () => {
  return (
    <div className="wrapperNavbar">
        <img alt="#" src={Logo}/>
        <ul className="wrapperNavbar__link">
            <li>Почему мы?</li>
            <li>Номера</li>
            <li>Отзывы</li>
            <li>Как нас найти</li>
        </ul>
    </div>
  )
}

export default Navbar