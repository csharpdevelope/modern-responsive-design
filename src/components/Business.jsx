import React from 'react';
import styles, { layout } from '../styles';
import { features } from '../Constant';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({icon, title, content, index}) => {
  const {t} = useTranslation();
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt={title} className='object-contain w-[50%] h-[50%]' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h3 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{t(`business.${title}`)}</h3>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{t(`business.${content}`)}</p>
      </div>
    </div>
  )
}

const Business = () => {
  const {t} = useTranslation();
  return (
    <section className='flex md:flex-row flex-col justify-between items-center sm:py-16 py-6'>
      <div className='flex flex-1 flex-col items-start justify-center'>
        <h1 className={styles.heading2}>{t("business.title")}</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("business.paragraph")}</p>
        <Button styles='mt-10'/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      
    </section>
  )
}

export default Business;