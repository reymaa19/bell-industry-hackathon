import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import Modal from "react-modal";
import "./InitiativeModal.scss";

const InitiativeModal = ({ isOpen, closeModal }) => {
  Modal.setAppElement("#root");

  const handleClick = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Initiative Modal"
      className="confirm"
      overlayClassName="confirm__overlay"
    >
      <button
        alt="Close"
        className="confirm__close-button"
        onClick={closeModal}
      />
      <div className="confirm__description">
        <Typography level="h3">Payment Confirmed!</Typography>
        <p>
          Your payment of $1,000 has been successfully processed, with 10% of
          that amount being generously donated to the Better world initiative.
        </p>
        <p>
          Bell will be matching your donation of $100 to the Better world
          initiative.
        </p>
        <div className="confirm__initiative-logo" />
        <p>Thank you!</p>
      </div>
      <div className="confirm__wrapper">
        <Button
          onClick={handleClick}
          onBlur={closeModal}
          variant="contained"
          size="lg"
          className="confirm__button"
        >
          <Typography color="white">CLOSE</Typography>
        </Button>
      </div>
    </Modal>
  );
};

export default InitiativeModal;
