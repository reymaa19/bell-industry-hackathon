import { useState } from "react";
import "./Brief.scss";
import ConfirmButton from "../ConfirmModal/ConfirmButton";
import Summary from "../Summary/Summary";

export default function Brief() {
  const [contribution, setContribution] = useState(1200.00);

  const handleContributionChange = (increase) => {
    setContribution(contribution + increase);
  };

  return (
    <div className="brief">
      <p className="brief__title">Amount due</p>

      <div className='brief__reminder'>
        <p className='brief__reminder-note'>Please pay by <span className='brief__reminder-note-date'>Oct 24, 2024.</span></p>
        <p className='brief__reminder-amount'>$100</p>
      </div>

      <Summary
        contribution={contribution}
        theRest={15010.33}
        initiative="Better World Initiative"
      />

      <div className="brief__redirections">
        <p className="brief__redirections-bill">View detailed bill ↓</p>
        <ConfirmButton donate={handleContributionChange} />
      </div>
    </div>
  );
}
