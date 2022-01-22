import Logo from '../../images/logo.svg';
import style from './style.module.css';

import Basket from '../../images/bascket.svg';
import Shop from '../../images/shop.svg';

import { MenuButtonGroup } from './menuButton';

export default function Header() {
  return (
    <header className={style.header}>
      <MenuButtonGroup titles={['Для мужщин', 'Для женщин', 'Для детей']} showTriangle={true} />
      <div className={style.logo}>
        <img src={Logo} />
        <div>the loop</div>
      </div>
      <MenuButtonGroup titles={['Оплата', 'Доставка']} />
      <div>
        <img src={Shop} />
        <img src={Basket} style={{ marginLeft: '.5em' }} />
      </div>
    </header>
  );
}
