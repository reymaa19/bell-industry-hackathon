import React from "react";
import { useState } from "react";
import "./DonationComponent.scss";
import ConfirmButton from "../ConfirmModal/ConfirmButton";
import Summary from "../Summary/Summary";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DonationComponent() {
  const payment = (55.55).toFixed(2);
  const date = "October 31, 2024";
  let taxes = (7.22).toFixed(2);
  let initTotal = (Number(payment) + Number(taxes)).toFixed(2);
  const [donation, setDonation] = useState(Math.round(0 * 100) / 100);
  const [contribution, setContribution] = useState(50);
  const [total, setTotal] = useState(initTotal);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleContributionChange = (increase) => {
    setContribution(contribution + increase);
  };

  function handleDonation(event) {
    let amount = Number(event.target.value);
    let totalAmount = (Number(amount) + Number(initTotal)).toFixed(2);
    setDonation(amount.toFixed(2));
    setTotal(totalAmount);
  }

  //
  return (
    <>
      <div className="donation-component-wrapper">
        <div className="donation-component">
          <div className="donation-component--left">
            <h2 className="donation-component__section-title">Amount Due</h2>
            <p className="donation-component__subtitle">
              Please pay by <span>{date}</span>
            </p>
            <div className="donation-component__bill-summary">
              <h3 className="donation-component__title">
                Current bill summary
              </h3>
              <p>Internet: ${payment}</p>
            </div>
            <div className="donation-component__donation">
              <label htmlFor="donationAmt">
                <span>Optional:</span> Donate for a Better World
              </label>
              <p className="tiny-text">
                Bell will match your donation up to $50
              </p>
              <FormControl sx={{ mt: 1, mb: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Initiative</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Initiative"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Mental Health Initiatives</MenuItem>
                  <MenuItem value={20}>
                    Youth Empowerment Through Sports & Recreation
                  </MenuItem>
                  <MenuItem value={30}>
                    Canadian Centre for Child Protection
                  </MenuItem>
                </Select>
              </FormControl>
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
            <h2 className="donation-component__summary-title">
              Payment Summary
            </h2>
            <h3 className="donation-component__line">
              Bell Servives: <span>${payment}</span>
            </h3>
            <h3 className="donation-component__line">
              Taxes Estimate: <span>${taxes}</span>
            </h3>
            <h3 className="donation-component__line">
              You'll Donate: <span>${donation}</span>
            </h3>
            <h3 className="donation-component__line">
              You'll Pay: <span>${total}</span>
            </h3>
            <div className="button-wrapper">
              <ConfirmButton donate={handleContributionChange} />
            </div>
          </div>
        </div>
        <div className="summary-wrapper">
          <Summary
            contribution={contribution}
            theRest={30}
            initiative="Your Impact: Better Canadian Communities"
          />
        </div>
      </div>
    </>
  );
}
