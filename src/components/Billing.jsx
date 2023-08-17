import React from 'react';
import { apple, google, paypal } from '../assets';
import styles, { layout } from '../styles';
import { useTranslation } from 'react-i18next';

const Billing = () => {
  const {t} = useTranslation();

  return (
    <section id="product" className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={paypal} alt='Billing' className='w-[100%] h-[100%] relative z-[5] object-contain' />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className={`flex justify-center flex-1 flex-col`}>
        <h2 className={`${styles.heading2} w-full`}>{t("billing.title")}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("billing.paragraph")}</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing;