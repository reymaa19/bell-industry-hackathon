import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import "./Temp.scss";

const Temp = ({ donate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    donate(100); // HARD CODED FIX LATER
  };

  return (
    <div className="temp">
      <Button
        variant="contained"
        color="success"
        onClick={() => setIsOpen(true)}
        size="lg"
        className="temp__button"
      >
        <Typography color="white">CONFIRM PAYMENT</Typography>
      </Button>
      {isOpen && <ConfirmModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
};

export default Temp;
