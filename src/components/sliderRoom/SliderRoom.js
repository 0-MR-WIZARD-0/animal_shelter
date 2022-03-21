
import slide from '../../img/slide.jpg'
import WhitePaw from '../../img/icon-paw-orange.svg'
import IconArrowRight from '../../img/icon-arrow.svg'
import IconArrowLeft from '../../img/icon-arrow-left.svg'
import './SliderRoom.scss'

const SliderRoom = () => {
  return (
    <section>
      <h2>Номера</h2>
          <div className="productWrapper">
            <div className="productWrapper__img">
              <img src={slide} alt="#" />
            </div>
            <article className="productWrapper__content">
                <h3>Эконом Люкс</h3>
                <p>Площадь</p>
                <p>Размеры</p>
                <p>Цена за сутки</p>
                <button className="buttonOrange">Забронировать
                <div className="buttonOrange__iconButtonWhite">
                  <img alt="#" src={WhitePaw}/>
                </div>
              </button>
            </article>
            <div className="number__arrows">
              <button className="number__arrow" href="###">
                <img/>
              </button>
              <button className="number__arrow" href="###">
                <img/>
              </button>
            </div>
					</div>
			</section>
  )
}

export default SliderRoom