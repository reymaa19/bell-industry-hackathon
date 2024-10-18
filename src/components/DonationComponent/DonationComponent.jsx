import React from "react";
// import Temp from "../ConfirmModal/Temp";
import { useState } from "react";
import "./DonationComponent.scss";

export default function DonationComponent() {
  const payment = 55.55;
  const date = "October 31, 2024";
  let taxes = (payment * 0.13).toFixed(2);
  let paymentT = payment.toFixed(2);
  const [donation, setDonation] = useState(Math.round(0 * 100) / 100);
  const [contribution, setContribution] = useState(1200.0);

  const handleContributionChange = (increase) => {
    setContribution(contribution + increase);
  };

  function handleDonation(event) {
    let amount = Number(event.target.value);
    setDonation(amount.toFixed(2));
  }

  //
  return (
    <div className="donation-component">
      <div className="donation-component--left">
        <h2 className="donation-component__section-title">Amount Due</h2>
        <p className="donation-component__subtitle">
          Please pay by <span>{date}</span>
        </p>
        <div className="donation-component__bill-summary">
          <h3 className="donation-component__title">Current bill summary</h3>
          <p>Internet: ${payment}</p>
        </div>
        <div className="donation-component__donation">
          <h3 className=""></h3>
          <label htmlFor="donationAmt">
            Optional: Donate for a Better World
          </label>
          <input
            type="number"
            id="donationAmt"
            name="donationAmt"
            min="1"
            step="any"
            placeholder="$1.00"
            prefix="$"
            onChange={handleDonation}
          />
        </div>
      </div>
      <div className="donation-component--right">
        <h2 className="donation-component__summary-title">Payment Summary</h2>
        <h3 className="">
          Bell Servives: <span>${payment}</span>
        </h3>
        <h3 className="">
          Taxes Estimate: <span>${taxes}</span>
        </h3>
        <h3 className="">
          You'll donate: <span>${donation}</span>
        </h3>
        {/* <Temp donate={handleContributionChange} /> */}
      </div>
    </div>
  );
}
