import { Popover } from "@/components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./PassengerNumberButton.styles";
import { PassengerForm } from "@/components/molecules";
import {
  PassengerFormData,
  PassengerNumberFormRef,
} from "@/components/molecules/PassengerForm/PassengerForm.types";
import { useRef, useState } from "react";
import { PassengerNumberButtonProps } from "./PassengerNumberButton.types";
import { ClassificationType } from "@/models/ClassificationType";

const PassengerNumberButton = ({ onChange }: PassengerNumberButtonProps) => {
  const classes = useStyles();
  const formRef = useRef<PassengerNumberFormRef>(null);
  const [formValue, setFormValue] = useState<PassengerFormData>({
    classificationType: ClassificationType.ECONOMY,
    passengerCount: 1,
  });

  const handleFormChange = (value: PassengerFormData) => {
    setFormValue(value);
  };

  const handleClose = () => {
    onChange && onChange(formValue);
  };

  return (
    <Popover
      position="bottom"
      width={300}
      content={
        <PassengerForm
          ref={formRef}
          onChange={handleFormChange}
          value={formValue}
        />
      }
      onClose={handleClose}
    >
      <div className={classes.passengerNumberButton}>
        <span>{formValue?.passengerCount ?? 1}</span>
        <FontAwesomeIcon icon="user" />
      </div>
    </Popover>
  );
};

export default PassengerNumberButton;
