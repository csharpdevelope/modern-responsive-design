import React from 'react'
import styles from '../styles';
import Button from './Button';
import { t } from 'i18next';

const CTA = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>

      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>{t("cta.title")}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("cta.paragraph")}</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button />
      </div>
    </div>
  )
}

export default CTA;