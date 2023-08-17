import React from 'react'
import { useTranslation } from 'react-i18next'

const Button = ({styles}) => {
  const {t} = useTranslation();
  return (
    <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      {t("business.button")}
    </button>
  )
}

export default Button