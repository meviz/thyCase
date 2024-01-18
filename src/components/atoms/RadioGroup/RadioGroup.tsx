import { useCallback, useEffect, useMemo, useState } from "react";
import { useStyles } from "./RadioGroup.styles";
import { RadioData, RadioGroupProps } from "./RadioGroup.types";

const RadioGroup = ({
  data,
  onChange,
  layout = "vertical",
  colNumber,
  value,
}: RadioGroupProps) => {
  const classes = useStyles({ layout, colNumber });
  const [valueState, setValueState] = useState(value);

  useEffect(() => setValueState(value), [value]);

  const handleChange = (item: RadioData) => {
    setValueState(item.key);
    onChange && onChange(item);
  };

  const isChecked = useCallback(
    (item: RadioData) => item.key === valueState,
    [valueState]
  );

  return (
    <div className={classes.radioGroupWrapper}>
      {data.map((item) => (
        <div className={classes.radioItem} key={item.key}>
          <input
            type="radio"
            name={item.key}
            value={item.key}
            id={item.key}
            checked={isChecked(item)}
            onChange={() => handleChange(item)}
          />
          <label htmlFor={item.key}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
