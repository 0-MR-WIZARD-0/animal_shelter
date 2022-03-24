import information from '../../json/Data.json'
import "swiper/css";
import "swiper/css/pagination";
import './SliderReviews.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const RenderReviews = () => {
    const template = Object.keys(information.rewiews).map(item => 
            <SwiperSlide className="sliderWrapperReviews__item" key={information.rewiews[item].id}>
              <div className="sliderWrapperReviews__content">
                <p>{information.rewiews[item].description}</p>
              </div>  
                <div className="sliderWrapperReviews__info">
                  <p>{information.rewiews[item].author}</p>
                  <p>{information.rewiews[item].date}</p>
                </div>
            </SwiperSlide>
    )
    return (
      // <div className="sliderWrapperReviews">
        <div>
            {template}
      </div> 
    )
}

const SliderReviews = (props) => {
  return (
    <section className="sliderWrapperReviews" key={props.id}>
        <h2>Отзывы</h2>
        <Swiper
            slidesPerView={3}
            spaceBetween={200}
            slidesPerGroup={3}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loopFillGroupWithBlank={false}
            modules={[Autoplay]}
        >
          {RenderReviews()}
        </Swiper>
        
        {/* <div className='WrapperSwitches'>
              <div className='dotSlide'>
                <div className='active'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
                <div className='pasive'></div>
              </div>
        </div> */}
    </section>
  )
}

export default SliderReviews