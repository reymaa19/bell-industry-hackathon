import React from 'react'
import './PaymentPage.scss'

import Header from '../../components/PaymentPage/Header.jsx'
import Brief from '../../components/PaymentPage/Brief.jsx'
import BillDetail from '../../components/PaymentPage/BillDetail.jsx'

export default function PaymentPage() {
  return (
    <div className='pymtPg'>
      <Header />
      <Brief />
      <BillDetail />
    </div>
  )
}
