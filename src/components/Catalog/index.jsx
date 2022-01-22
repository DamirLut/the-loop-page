import style from './style.module.css';
import TShirt from '../../images/tshirt.png';

export default function Catalog() {
  const catalog = Array.from({ length: 4 });

  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.firstLine}>
          {catalog.map((_, i) => (
            <div key={i} className={style.card}>
              <div>платья</div>
              <img src={TShirt} />
            </div>
          ))}
        </div>
        <div className={style.secondLine}>
          {catalog.map((_, i) => (
            <div key={-i} className={style.card}>
              <div>платья</div>
              <img src={TShirt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
