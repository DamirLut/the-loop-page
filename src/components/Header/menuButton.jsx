import style from './style.module.css';

export function MenuButton({ title, showTriangle }) {
  return (
    <a href="#" className={style.button}>
      <div>{title}</div>
      {showTriangle && (
        <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 4L0.334936 0.25L4.66506 0.25L2.5 4Z" fill="#212121" />
        </svg>
      )}
    </a>
  );
}

export function MenuButtonGroup({ titles, showTriangle }) {
  return (
    <ul className={style['button-group']}>
      {titles.map((title) => (
        <li>
          <MenuButton title={title} showTriangle={showTriangle} />
        </li>
      ))}
    </ul>
  );
}
