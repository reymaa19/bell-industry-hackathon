import React from 'react'
import './Brief.scss'

export default function Brief() {
  return (
    <div className='brief'>
      <h2 className='brief__title'>Amount due</h2>

      <div className='brief__reminder'>
        <p className='brief__reminder-note'>Please pay by <span>Oct.24, 2024.</span></p>
        <p className='brief__reminder-amount'>$100</p>
      </div>
      
      <div className='brief__redirections'>
        <p className='brief__redirections-bill'>View detailed bill ↓</p>
        <p className='brief__redirections-pay'>Pay now</p>
      </div>
    </div>
  )
}
