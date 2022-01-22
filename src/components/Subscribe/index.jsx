import style from './style.module.css';

export default function Subscribe() {
  return (
    <div className={style.container}>
      <div>ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ</div>
      <input placeholder="Ваш email" />
      <button>подписаться</button>
    </div>
  );
}
