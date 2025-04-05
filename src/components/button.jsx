import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useCounter from "../hooks/UseCounter";

const Button = ({ label }) => {
  const { count, increment } = useCounter();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (count === 5 && buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
    }
  }, [count]);

  return (
    <button ref={buttonRef} onClick={increment}>
      {label} ({count})
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;