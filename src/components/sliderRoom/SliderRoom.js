import {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination } from 'swiper'
import slide1 from '../../img/slide.jpg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'
import slide4 from '../../img/slide4.jpg'
import slide5 from '../../img/slide5.jpg'
import slide6 from '../../img/slide6.jpg'
import WhitePaw from '../../img/icon-paw-orange.svg'
import IconArrowRight from '../../img/icon-arrow.svg'
import IconArrowLeft from '../../img/icon-arrow-left.svg'
import information from '../../json/Data.json'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './SliderRoom.scss'

// const card = Object.keys(information.rooms).map((item => {
//   return (
//     <div key={information.rooms[item].key}>
//       <div className="productWrapper__img">
//           <img src={information.rooms[item].img} alt="#" />
//       </div>
//       <article className="productWrapper__content">
//           <h3>{information.rooms[item].title}</h3>
//           <ul>
//             <li>Площадь - {information.rooms[item].square}</li>
//             <li>Размеры (ШхГхВ) - {information.rooms[item].sizes}</li>
//             <li>Цена за сутки: {information.rooms[item].price}</li>
//           </ul>
//           <button className="buttonOrange">Забронировать
//           <div className="buttonOrange__iconButtonWhite">
//             <img alt="#" src={WhitePaw}/>
//           </div>
//         </button>
//       </article> 
//     </div>
//   )
// }))

const SliderRoom = () => {

  return (
    <section>
      <h2>Номера</h2>
      {/* <div className="productWrapper"> */}
            {/* {card} */}
      {/* </div>   */}
          <div className="productWrapper">
            <div className="productWrapper__img">
              <img src={slide6} alt="#" />
            </div>
            <article className="productWrapper__content">
                <h3>Эконом Люкс</h3>
                <ul>
                  <li>Площадь - 0,90 м2</li>
                  <li>Размеры (ШхГхВ) - 90х100х180 см</li>
                  <li>Цена за сутки: 200₽</li>
                </ul>
                <button className="buttonOrange">Забронировать
                <div className="buttonOrange__iconButtonWhite">
                  <img alt="#" src={WhitePaw}/>
                </div>
              </button>
            </article>
            <div className='WrapperSwitches'>
              <div className='dotSlide'>
                <div className='active'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
              </div>
              <div className="number__arrows">
                <button className="number__arrow" href="###">
                  <img/>
                </button>
                <button className="number__arrow" href="###">
                  <img/>
                </button>
              </div>
            </div>  
					</div>
			</section>
  )
}


export default SliderRoom