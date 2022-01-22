import style from './style.module.css';
import Arrow from '../../images/arrow.svg';
import Border from '../../images/border.svg';
import Woman from '../../images/woman2.png';

function Card() {
  return (
    <div className={style.card}>
      <img src={Border} />
      <div className={style.cardInfo}>
        <img src={Woman} width={205} height={211} />
        <div>Коктейльное платье</div>
        <span>₽ 40 000</span>
      </div>
    </div>
  );
}

export default function NewItem({ title }) {
  const cards = [<Card />, <Card />, <Card />, <Card />];
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2>{title}</h2>
        <div>{cards}</div>
        <button>
          ВCЕ МОДЕЛИ <img src={Arrow} />
        </button>
      </div>
    </div>
  );
}
