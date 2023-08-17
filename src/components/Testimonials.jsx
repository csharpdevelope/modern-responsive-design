import React from 'react';
import styles from '../styles';
import { feedback } from '../Constant';
import { quote } from '../assets';
import { t } from 'i18next';

const FeedbackCard = ({ name, title, img, content }) => {
  return(
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quote} alt='Quote' className='w-[42px] h-[42px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{t(`feedback.${content}`)}</p>

      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] object-contain rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-normal text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section id="#clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]`}>
        <h2 className={`${styles.heading2} max-w-[470px]`}>{t("testimonal.title")}</h2>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>{t("testimonal.paragraph")}</p>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((feed) => (
          <FeedbackCard key={feed.id} {...feed} />
        ))}
      </div>
    
    </section>
  )
}

export default Testimonials;