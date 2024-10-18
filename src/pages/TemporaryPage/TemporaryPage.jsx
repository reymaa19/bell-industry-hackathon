import { useState } from "react";
import "./TemporaryPage.scss";
import Temp from "../../components/ConfirmModal/Temp";
import Summary from "../../components/Summary/Summary";

function TemporaryPage() {
  const [contribution, setContribution] = useState(1200.0);

  const handleContributionChange = (increase) => {
    setContribution(contribution + increase);
  };

  return (
    <main className="main">
      <div className="main__container">
        <Summary
          contribution={contribution}
          theRest={15010.33}
          initiative="Better World Initiative"
        />
        <Summary
          contribution={1000}
          theRest={10093.59}
          initiative="Some Other Initiative"
        />
      </div>
      <Temp donate={handleContributionChange} />
    </main>
  );
}

export default TemporaryPage;
