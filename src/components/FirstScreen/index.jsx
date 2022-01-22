import Header from '../Header';

import style from './style.module.css';

import Shoes from '../../images/shoes.png';

function Slider({ id, count }) {
  return (
    <div className={style.slider}>
      {Array.from({ length: count }).map((_, i) => {
        const classNames = [style['slider-element']];
        if (i == id) {
          classNames.push(style['slider-active']);
        }
        return <div key={i} className={classNames.join(' ')}></div>;
      })}
    </div>
  );
}

export default function FirstScreen() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.center}>
        <div className={style.textContainer}>
          <div>Зимняя распродажа</div>
          <span>Скидки до 90%</span>
          <button>Смотреть модели</button>
        </div>
        <div className={style.shoesContainer}>
          <div>
            <del>9 900 ₽</del>
            <span>1 900 ₽</span>
          </div>
          <img src={Shoes} width={556} height={337} />
        </div>
      </div>
      <Slider count={4} id={1} />
    </div>
  );
}
