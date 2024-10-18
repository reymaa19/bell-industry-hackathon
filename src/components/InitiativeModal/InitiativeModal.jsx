import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import Modal from "react-modal";
import "./InitiativeModal.scss";

const InitiativeModal = ({ isOpen, closeModal, setScore }) => {
  Modal.setAppElement("#root");

  const handleClick = () => {
    setScore(0);
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
        onClick={handleClick}
      />
      <div className="confirm__description">
        <Typography level="h3">
          Thank you for supporting one of the Bell's initiatives!
        </Typography>
        <p>Your contribution makes a big difference!</p>
        <p>
          You are welcome to play a game again to support other initiatives as
          well.
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
