import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./MessageModal.styles";
import { MessageModalProps } from "./MessageModal.types";
import Button from "../Button/Button";

const MessageModal = ({ message, onClose, visible }: MessageModalProps) => {
  const classes = useStyles();

  const handleClick = () => {
    onClose && onClose();
  };

  return (
    <>
      {visible && (
        <div className={classes.modalWrapper}>
          <div className={classes.modalContent}>
            <div className="message-wrapper">
              <FontAwesomeIcon
                icon="exclamation-triangle"
                className="message-icon"
              />
              <div className="message-text">{message}</div>
            </div>
            <div className="action-wrapper">
              <Button
                className="action-button"
                label="Kapat"
                onClick={handleClick}
                type={"primary"}
                size="medium"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageModal;
