import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./SearchInput.styles";
import { SearchInputProps } from "./SearchInput.types";
import { ChangeEvent, useEffect, useState } from "react";

const SearchInput = ({
  value,
  onChange,
  icon,
  placeholder,
}: SearchInputProps) => {
  const classes = useStyles();
  const [valueState, setValueState] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className={classes.inputWrapper}>
      {icon && <FontAwesomeIcon className={classes.icon} icon={icon} />}
      <input
        placeholder={placeholder}
        value={value?.value}
        onChange={(e) => handleChange(e)}
        className={classes.input}
      />
    </div>
  );
};

export default SearchInput;
