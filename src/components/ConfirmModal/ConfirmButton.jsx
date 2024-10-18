import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import "./Temp.scss";

const ConfirmButton = ({ donate }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const closeModal = () => {
    setIsOpen(false);
    donate(10); // HARD CODED FIX LATER
  };

  const theme = createTheme({
    palette: {
      ochre: {
        main: '#0065A4',
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
        size="lg"
        className="MuiButton-colorSuccess"
      >
        Pay Now
      </Button>
      {isOpen && <ConfirmModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
};

export default ConfirmButton;
