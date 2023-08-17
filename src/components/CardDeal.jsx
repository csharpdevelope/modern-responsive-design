import React from 'react'
import styles from '../styles';
import Button from './Button';
import { cardDeal } from '../assets';
import { t } from 'i18next';

const CardDeal = () => {

  return (
    <section className={`flex md:flex-row flex-col justify-center items-start ${styles.paddingY}`}>
      <div className={`flex flex-1 flex-col items-start`}>
        <h2 className={`${styles.heading2}`}>
          {t("cardDeal.title")}
        </h2>
        <p className={`${styles.paragraph}`}>{t("cardDeal.paragraph")}</p>
        <Button styles={'mt-10'} />
      </div>
      <div className={`flex flex-1 justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
        <img src={cardDeal} alt='Card Deal' className='w-[100%] h-full' />
      </div>
    </section>
  )
}

export default CardDeal;