import React, { useContext, useState } from 'react';
import {logo, close, menu} from '../assets'; 
import { navLinks } from '../Constant';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../LanguageProvider';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const {lang, setLang, setLoading } = useContext(AppContext);

  const changeLanguage = (event) => {
    setLoading(true);
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
    setLoading(false);
  }

  return (
    <nav className='w-full flex justify-between py-6 items-center navbar'>
      <img src={logo} alt="hoabank" className=' w-[124px] h-[32px]' />
      <div className=''>
        <ul className='list-none sm:flex hidden flex-1 justify-end items-center'>
          {navLinks.map((link, index) => (
            <li 
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`} 
            >
              <a href={`#${link.title}`}>{t(`navbar.${link.title}`)}</a>
            </li>
          ))}
          <li key={"language"}>
            <select value={lang} className='w-full p-2 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => changeLanguage(e)}>
              <option defaultValue={"en"} value={"en"} >English</option>
              <option defaultValue={"ru"} value={"ru"}>Russian</option>
            </select>
          </li>
        </ul>
      </div>
      
      <div className='sm:hidden flex justify-end items-center'>
        <select className='w-full sm:p-2 p-1 sm:text-sm ss:text-[12px] text-[10px] outline-none sm:mr-10 mr-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => changeLanguage(e)}>
          <option value={"en"} selected>English</option>
          <option value={"ru"}>Russian</option>
        </select>
        <div>
          <img 
            src={!toggle ? menu: close}
            alt='Menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;