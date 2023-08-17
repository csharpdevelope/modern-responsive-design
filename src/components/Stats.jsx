import React from 'react';
import { stats } from '../Constant';
import styles from '../styles';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const {t} = useTranslation();
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map(stats => (
        <div className={`flex flex-1 justify-start items-center flex-nowrap m-3`} key={stats.id}>
          <h3 className='font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white'>{stats.value}</h3>
          <p className='font-poppins font-normal xs:text-[18px] text-[14px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3'>{t(`stats.${stats.title}`)}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats