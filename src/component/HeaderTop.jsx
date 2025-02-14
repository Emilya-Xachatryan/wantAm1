// import React from 'react';
import "../styles/HeaderTop.css"
const HeaderTop = () => {
  return (
    <div className="header__top-wrapper">
      <a className="header__link" href="mailto:info@want.am" target="_blank" rel="noopener noreferrer">
        <div className="header__link-icon">
          <svg>
            <use xlinkHref="https://want.am/wp-content/themes/dev.want.am/images/sprites.svg#mail"></use>
          </svg>
        </div>
        info@want.am
      </a>
      <a className="header__link" href="tel:094092092" target="_blank" rel="noopener noreferrer">
        <div className="header__link-icon">
          <svg>
            <use xlinkHref="https://want.am/wp-content/themes/dev.want.am/images/sprites.svg#phone"></use>
          </svg>
        </div>
        094-092-092
      </a>
      <div className="header__language languages">
        <div className="languages__current">
          <img className="languages__icon" src="https://want.am/wp-content/themes/dev.want.am/images/icons/ar.svg" alt="am" />
          <div className="languages__name">am</div>
        </div>
        <div className="languages">
          <div className="languages__items">
            <a className="languages__link is-active" data-lang="hy" href="/">
              <img className="languages__icon" src="https://want.am/wp-content/themes/dev.want.am/images/icons/ar.svg" alt="am" />
              <div className="languages__name">am</div>
            </a>
            <a className="languages__link" data-lang="ru" href="/ru//">
              <img className="languages__icon" src="https://want.am/wp-content/themes/dev.want.am/images/icons/ru.svg" alt="ru" />
              <div className="languages__name">ru</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
