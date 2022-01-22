import style from './style.module.css';

export default function FreeShiping() {
  return (
    <div className={style.container}>
      <div>
        <span className={style.free}>БЕСПЛАТНАЯ ДОСТАВКА </span>
        ОТ 3000₽
      </div>
      <div className={style.smaller}>Сделайте заказ и получите подарок!</div>
    </div>
  );
}
