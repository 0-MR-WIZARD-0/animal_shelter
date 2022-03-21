import './Footer.scss'
import Navbar from '../navbar/Navbar'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import LocationMarker from '../../img/logo.svg'


const coordinate = () => {
    return [59.93, 30.32]
}

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__top">
            <div className="footer__content">
                <h3>Как нас найти</h3>
                    <p>Адрес</p>
                    <a href="###">Санкт-Петербург, ул. Большая Конюшенная, д 19</a>
                    <p>Режим работы</p>
                    <a href="###">Ежедневно, с 9:00 до 20:00</a>
                    <p>Телефон</p>
                    <a href="tel:+78003335599">8 (800) 333-55-99</a>
                    <p>E-mail</p>
                    <a href="mailto:info@cat-hotel.ru">info@cat-hotel.ru</a>
                    <p>Социальные сети</p>
            </div>
            <div className="footer__card">
                <YMaps>
                    <Map className="footer__map" defaultState={{ center: [59.93, 30.32], zoom: 15}}>
                    <Placemark
                        geometry={[59.93, 30.32]}
                        key={1}
                        properties={{
                            iconContent: "iconContent",
                        }}
                        options={{
                            iconLayout: "default#image",
                            iconImageSize: [40, 35],
                            iconImageHref: LocationMarker,
                        }}
                        />
                    </Map>
                </YMaps>
            </div>
        </div>
        <div>
            <Navbar/>
            <div className="footer__info">
                <ul>
                    <li>2019 Все права защищены</li>
                    <li>Политика конфиденциальности</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer