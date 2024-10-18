import React from 'react'
import './BillDetail.scss'
import { useState } from 'react';


export default function BillDetail() {

  return (
    <div className='bill'>
      <div className='bill__1'>
           <p className='bill__title'>Current bill summary</p>
            <p className='bill__date'>(Feb. 1, 5050)</p> 
        </div>

        <div className='bill__2 bill__withAmount'>
            <p className='bill__description'>Your Bell products and services (Includes multi-service and limited-time offers)
            </p>
            <p className='bill__amount'>$100</p>
        </div>

        <div className='bill__3 bill__withAmount'>
            <div className='bill__taxes'>
                <p className='bill__taxes-icon'>+</p>
                <p className='bill__taxes-word'>Taxes</p>  
            </div>
            <p className='bill__amount'>$13</p>
        </div>
        
        <div className='bill__4 bill__withAmount'>
           <p className='bill__remaining-balance'>Remaining balance of previous bill(s)</p> 
           <p className='bill__amount'>$0</p>
        </div>
        
        <div className='bill__5 bill__withAmount'>
            <p className='bill__total'>Your total</p>
            <p className='bill__amount'>$113</p>
        </div>

        <div className='bill__6 bill__withAmount'>
            <p className='bill__amount-due'>Amount due</p>
            <p className='bill__amount'>$113</p>
        </div>

        <div className='bill__7'>
            <p className='bill__title'>Previous bill summary</p>
            <p className='bill__date'>(Jan. 1, 5050)</p>
        </div>

        <div className='bill__8 bill__withAmount'>
            <p className='bill__previous-bill'>Previous bill total</p>
            <p className='bill__amount'></p>
        </div>
    </div>
  )
}
