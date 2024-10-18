import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>My bill</h1>
      <div className='header__navList'>
        <p className='header__navListItems header__navCrrBill'>Current bill</p>
        <p className='header__navListItems header__navPastBill'>Past bills</p>
      </div>
    </div>
  )
}
