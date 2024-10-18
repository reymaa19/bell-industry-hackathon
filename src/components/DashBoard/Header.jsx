import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss'

export default function Header() {
  return (
    <div>
        <h1>Internet</h1>
        <div>
            <img></img>
            <div>
                <div>
                    <p>My bill</p>
                    <p>$0<span>.00</span></p>
                </div>
                <p>Payment received - <span>Thank you</span></p>
                <p>Your payment for Taylor Smith was received Feburary 1, 5050</p>
            </div>  
            <div>
                <Link to={'/PaymentPage'}>View bill</Link>
                <p>Payment Options</p>
            </div>
        </div>
        
    </div>
  )
}
