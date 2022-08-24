import * as React from 'react';
import css from './hero.module.css';

export default function Hero({ children }: React.PropsWithChildren<unknown>) {
  return (
    <div className={css.hero}>
      <div className={css.contentColumn}>
        <div className={css.contentContainer}>
          {children}
        </div>
      </div>
      <div className={css.bg}/>
    </div>
  );
};
