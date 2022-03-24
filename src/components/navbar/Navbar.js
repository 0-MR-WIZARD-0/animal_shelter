import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/logo.svg'

const ScrollToInfo = () => {
  let map = document.querySelector('.wrapperCard')
  map.scrollIntoView({block: "center"}); 
} 

const ScrollToMap = () => {
  let map = document.querySelector('.footer')
  map.scrollIntoView({block: "center"}); 
} 

const navigateTo = () => {
  let rewiew = document.querySelector('.sliderWrapperReviews')
  try {
    let offsetTop = rewiew.offsetTop;
    window.scrollTo({
      top: offsetTop - 300,
      behavior: "smooth",
    });
  } catch (e) {
    return;
  }
};

const Navbar = (props) => {
  return (
    <nav className="wrapperNavbar">
        <div><NavLink to="/"><img alt="#" src={Logo}/></NavLink></div>
        <ul className="wrapperNavbar__link">
            <li onClick={()=>ScrollToInfo()}>Почему мы?</li>
            <li><NavLink to="/OurRoom">Номера</NavLink></li>
            <li onClick={()=>navigateTo()}>Отзывы</li>
            <li onClick={()=>ScrollToMap()}>Как нас найти</li>
        </ul>
    </nav>
  )
}

export default Navbar