import { NumberInput, RadioGroup } from "@/components/atoms";
import { useStyles } from "./PassengerForm.styles";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
  PassengerFormData,
  PassengerNumberFormProps,
  PassengerNumberFormRef,
} from "./PassengerForm.types";
import { ClassificationType } from "@/models/ClassificationType";

const data = [
  {
    key: ClassificationType.ECONOMY,
    label: "Economy Class",
  },
  {
    key: ClassificationType.BUSINESS,
    label: "Business Class",
  },
];

const PassengerForm = forwardRef<
  PassengerNumberFormRef,
  PassengerNumberFormProps
>(({ value, onChange }, ref) => {
  const classes = useStyles();
  const [formValue, setFormValue] = useState<PassengerFormData>({
    classificationType: value?.classificationType ?? data[0].key,
    passengerCount: value?.passengerCount ?? 1,
  });

  useEffect(() => {
    onChange && onChange(formValue);
  }, [formValue]);

  const getValue = () => formValue;

  useImperativeHandle(ref, () => ({
    getValue,
  }));

  return (
    <div className={classes.formWrapper}>
      <div className="header">Kabin ve yolcu seçimi</div>
      <div className="classification-type">
        <RadioGroup
          data={data}
          layout="horizontal"
          colNumber={2}
          value={formValue.classificationType}
          onChange={(value) =>
            setFormValue({
              ...formValue,
              classificationType: value.key as ClassificationType,
            })
          }
        />
      </div>
      <div className="passenger-number">
        <b>Yolcu</b>
        <NumberInput
          minValue={1}
          maxValue={9}
          onChange={(value) =>
            setFormValue({
              ...formValue,
              passengerCount: value,
            })
          }
        />
      </div>
    </div>
  );
});

export default PassengerForm;
