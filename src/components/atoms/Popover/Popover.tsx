import { useEffect, useRef, useState } from "react";
import { PopoverProps } from "./Popover.types";
import { useStyles } from "./Popover.styles";
import clsx from "clsx";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const Popover = ({
  children,
  position,
  content,
  width,
  visible = false,
  onClose,
}: PopoverProps) => {
  const classes = useStyles({ width });
  const ref = useRef(null);
  const [visibleState, setVisibleState] = useState(visible);

  useEffect(() => {
    if (!visibleState) {
      onClose && onClose();
    }
  }, [visibleState]);

  useOutsideClick(ref, () => {
    setVisibleState(false);
  });

  const handleClick = () => {
    setVisibleState((prev) => !prev);
  };

  return (
    <div className={classes.popoverWrapper} ref={ref}>
      <span onClick={() => handleClick()}>{children}</span>
      {visibleState && (
        <div className={clsx(classes.popoverContent, classes[position])}>
          <span className="arrow"></span>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
