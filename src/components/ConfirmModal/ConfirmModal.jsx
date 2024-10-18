import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import Modal from "react-modal";
import "./ConfirmModal.scss";

const ConfirmModal = ({ isOpen, closeModal }) => {
  Modal.setAppElement("#root");

  const handleClick = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Confirm Modal"
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
        <p>Your payment has been successfully processed, with a portion of that amount being generously donated towards Canadian charities as part of the Bell Better World initiative.</p>
        <p>Bell will be matching your donation of $5 for a total of $10 towards the Better world initiative.</p>
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

export default ConfirmModal;
