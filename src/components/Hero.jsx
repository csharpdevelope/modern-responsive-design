import React from 'react';
import styles from '../styles';
import { quotes, robot } from '../assets';
import GetStarted from './GetStarted';
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
          <img src={quotes} alt='Double quotes' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> {t("hero.discount")}{" "}
            <span className="text-white">{t("hero.month")}</span> {t("hero.account")}
          </p>
        </div>

        <div className={`flex justify-between items-center w-full flex-row`}>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
            {t("hero.next")} <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>{t("hero.generate")}</span>
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
          {t("hero.paymentMethod")}
        </h1>
        <p className={`${styles.paragraph} max-w-[490px] mt-5`}>{t("hero.paragraph")}</p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='Robot' className='w-[100%] h-[100%] object-contain relative z-[5]' />

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

    </section>
  )
}

export default Hero;