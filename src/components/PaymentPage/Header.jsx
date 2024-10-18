import React from 'react'
import './Header.scss'
import icon from "/src/assets/bell-old-logo-white.png";


export default function Header() {
  return (
    <>
      <div className="payment-header">
        <div className="payment-wrapper">
        <img src={icon} className="payment-header-icon" />
        <h1 className="payment-header-title">Blue Bells</h1>
        </div>
        <p className="payment-header-text">Welcome back, Jane</p>
        </div>
    <div className='header'>
      <h1 className='header__title'>My bill</h1>
      <div className='header__navList'>
        <p className='header__navListItems header__navCrrBill'>Current bill</p>
        <p className='header__navListItems header__navPastBill'>Past bills</p>
      </div>
    </div>
    </>
  )
}
