import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div>
       <h1 className='pymtPg__title'>My bill</h1>
      <ul className='pymtPg__navList'>
        <li className='pymtPg__navListItems pymtPg__navCrrBill'>Current bill</li>
        <li className='pymtPg__navListItems pymtPg__navPastBill'>Past bills</li>
      </ul>
    </div>
  )
}
