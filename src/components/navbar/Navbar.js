import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/logo.svg'

const ScrollToInfo = () => {
  let map = document.querySelector('.wrapperCard')
  map.scrollIntoView({block: "center"}); 
} 

const ScrollToReviews = () => {
  let rewiews = document.querySelector('.sliderWrapperReviews')
  rewiews.scrollIntoView({block: "center"}); 
} 

const ScrollToMap = () => {
  let map = document.querySelector('.footer')
  map.scrollIntoView({block: "center"}); 
} 

const navigateTo = () => {
  try {
    let offsetTop = document.querySelector('.sliderWrapperReviews').offsetTop;
    window.scrollTo({
      top: offsetTop - 400,
      behavior: "smooth",
    });
  } catch (e) {
    return;
  }
};

const Navbar = () => {
  return (
    <nav className="wrapperNavbar">
        <NavLink to="/"><img alt="#" src={Logo}/></NavLink>
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