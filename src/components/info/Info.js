import './Info.scss'
import Temperature from '../../img/icon-temperature.svg'
import Video from '../../img/icon-video.svg'
import Taxi from '../../img/icon-taxi.svg'
import Food from '../../img/icon-food.svg'
import Walk from '../../img/icon-walk.svg'
import Veterinarian from '../../img/icon-veterinarian.svg'


const Info = () => {
  return (
    <section className="wrapperCard">
        <h2>Почему мы?</h2>
        <div className="wrapperCard__grid">
            <article className='wrapperCard__item'>
                <img alt="#" src={Temperature}/>
                <h3>Комфортная температура</h3>
                <p>Во всех номерах поддерживается комфортная температура в пределах 23-25 градусов. В каждом номере можно дополнительно отрегулировать температуру.</p>
            </article>
            <article className='wrapperCard__item'>
                <img alt="#" src={Video}/>
                <h3>Видеонаблюдение</h3>
                <p>Мы предоставляем доступ к нашей системе. Вы сможете наблюдать за своими питомцами со своего смартфона или компьютера.</p>
            </article>
            <article className='wrapperCard__item'>
                <img alt="#" src={Taxi}/>
                <h3>Услуги Зоотакси</h3>
                <p>Мы приедем за вашим питомцем в любой район Санкт-Петербурга.</p>
            </article>
            <article className='wrapperCard__item'>
                <img alt="#" src={Food}/>
                <h3>Cбалансированное питание</h3>
                <p>Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам.</p>
            </article>
            <article className='wrapperCard__item'>
                <img alt="#" src={Walk}/>
                <h3>Ежедневные прогулки</h3>
                <p>По вашему желанию мы выгуливаем вашего питомца два раза в день на специальной закрытой территории.</p>
            </article>
            <article className='wrapperCard__item'>
                <img alt="#" src={Veterinarian}/>
                <h3>Лучшие ветеринары</h3>
                <p>В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.</p>
            </article>
        </div>
    </section>
  )
}

export default Info