import style from './style.module.css';
import Logo from '../../images/logo.svg';
import VK from '../../images/vk.svg';
import Facebook from '../../images/facebook.svg';
import Insta from '../../images/instagram.svg';

export function Column({ title, data }) {
  return (
    <div className={style.column}>
      <h3>{title}</h3>
      <div>
        {data.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
    </div>
  );
}
export function ColumnIcon({ title, data }) {
  return (
    <div className={style.column}>
      <h3>{title}</h3>
      <div>
        {data.map((d, i) => (
          <div key={i}>
            <img src={d[0]} />
            {d[1]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.firstColumn}>
            <div className={style.logo}>
              <img src={Logo} width={40} />
              <div>THE LOOP</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit,
              at eleifend elit ornare ut.
            </div>
          </div>
          <Column title="Основные ссылки" data={['О компании', 'Каталог', 'Доставка', 'Оплата']} />
          <Column
            title="Категории"
            data={['Мужская одежда', 'Женская одежда', 'Детская одежда', 'Для животных']}
          />
          <Column
            title="Полезные ссылки"
            data={['Таблица размеров', 'Блог о моде', 'Наша миссия']}
          />
          <ColumnIcon
            title="Соц сети"
            data={[
              [VK, 'VK.com'],
              [Facebook, 'Facebook'],
              [Insta, 'Instagram'],
            ]}
          />
        </div>
      </div>
      <div className={style.container2}>
        <div>Copyright © 2019. Все права защищены</div>
        <div>Политика приватности</div>
      </div>
    </>
  );
}
