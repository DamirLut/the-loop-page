import style from './style.module.css';

import Man from '../../images/man.png';
import Woman from '../../images/woman.png';
import Arrow from '../../images/arrow.svg';

function CollectionInfo({ title, image, right, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <div className={style.wrapper} style={{ right }}>
        <div className={style.info}>
          <div className={style.collection}>
            <span>{title}</span> коллекия
          </div>
          <div className={style['collection-info']}>Обувь, полуверы, костюмы</div>
          <button>
            <img src={Arrow} />
          </button>
        </div>
        <img src={image} width={190} height={171} />
      </div>
    </div>
  );
}

export default function Collection() {
  return (
    <div className={style.container}>
      <CollectionInfo title="Мужская" image={Man} right={0} color="#f9f6f1" />
      <CollectionInfo title="Женская" image={Woman} color="#F4F4F4" />
    </div>
  );
}
