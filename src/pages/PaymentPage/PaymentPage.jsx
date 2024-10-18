import React from "react";
import "./PaymentPage.scss";
import Header from "../../components/PaymentPage/Header.jsx";
import Featured from "../../components/Featured/Featured.jsx";
import Brief from "../../components/PaymentPage/Brief.jsx";
import BillDetail from "../../components/PaymentPage/BillDetail.jsx";
import DonationComponent from "../../components/DonationComponent/DonationComponent.jsx";

export default function PaymentPage() {
  return (
    <div className="pymtPg">
      <Header />
      <Featured />
      <DonationComponent />
    </div>
  );
}
