import React from 'react'
import './BillDetail.scss'

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

        <div className='bill__3 bill-withAmount'>
            <div className='bill-taxes'>
                <p className='bill-taxes-icon'>+</p>
                <p className='bill-taxes-word'>Taxes</p>  
            </div>
            <p className='bill__amount'>$13</p>
        </div>
        
        <div className='bill-4 bill-withAmount'>
           <p>Remaining balance of previous bill(s)</p> 
           <p className='bill__amount'>$0</p>
        </div>
        
        <div className='bill-5 bill-withAmount'>
            <p>Your total</p>
            <p className='bill__amount'>$113</p>
        </div>

        <div className='bill-6 bill-withAmount'>
            <p>Amount due</p>
            <p className='bill__amount'>$113</p>
        </div>

        <div className='bill-7'>
            <p className='bill-title'>Previous bill summary</p>
            <p className='bill-date'>(Jan. 1, 5050)</p>
        </div>

        <div className='bill-8 bill-withAmount'>
            <p>Previous bill total</p>
            <p className='bill__amount'>$100</p>
        </div>
    </div>
  )
}
