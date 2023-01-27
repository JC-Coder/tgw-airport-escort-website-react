import React from 'react'
import styles from '../style'

const FooterCTA = () => {
  return (
    <div className={`bg-[var(--blue)] py-10 ${styles.paddingX} border-b border-gray-400`}>
    <div className="text-center">
      <h4 className="text-white md:text-4xl text-3xl font-bold my-9">We are here to help <br/> you grow your business</h4>
      <button className="bg-white font-medium py-2 px-4 rounded-3xl text-[var(--blue)]">Get Started Now</button>
    </div>
  </div>
  )
}

export default FooterCTA