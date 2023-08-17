import React from 'react'
import styles from '../styles';
import { logo } from '../assets';
import { footerLinks } from '../Constant';
import { t } from 'i18next';

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-[1] flex flex-col justify-start mr-10`}>
          <img src={logo} alt='HooBank' className='w-[260px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} max-w-[312px] mt-4`}>{t("footer.title")}</p>
        </div>
        <div className='flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map(footerLink => (
            <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {t(footerLink.title)}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24x] text-dimWhite hover:text-secondary cursor-pointer
                  ${index === footerLink.links.length - 1 ? 'mb-0' : 'mb-4'}`}>
                    {t(link.name)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          {t("copyright")}
        </p>
      </div>
    </footer>
  )
}

export default Footer;