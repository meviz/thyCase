import { useStyles } from "./NumberInput.styles";
import Button from "../Button/Button";
import { NumberInputProps } from "./NumberInput.types";
import { useStateCallback } from "@/hooks/useStateCallback";

const NumberInput = ({
  value,
  onChange,
  minValue,
  maxValue,
}: NumberInputProps) => {
  const classes = useStyles();
  const [valueState, setValueState] = useStateCallback(value ?? minValue ?? 0);

  const handlePlusClick = () => {
    if (maxValue !== undefined && valueState < maxValue) {
      setValueState(valueState + 1, (value) => onChange && onChange(value));
    } else if (maxValue === undefined) {
      setValueState(valueState + 1, (value) => onChange && onChange(value));
    }
  };

  const handleMinusClick = () => {
    if (minValue !== undefined && valueState > minValue) {
      setValueState(valueState - 1, (value) => onChange && onChange(value));
    } else if (minValue === undefined) {
      setValueState(valueState - 1, (value) => onChange && onChange(value));
    }
  };

  return (
    <div className={classes.wrapper}>
      <Button
        icon="minus"
        type="ghost"
        size="small"
        radius={5}
        onClick={handleMinusClick}
      />
      <span>{valueState}</span>
      <Button
        icon="plus"
        type="ghost"
        size="small"
        radius={5}
        onClick={handlePlusClick}
      />
    </div>
  );
};

export default NumberInput;
