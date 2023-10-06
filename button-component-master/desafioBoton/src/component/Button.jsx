import PropTypes from "prop-types";
import StyledButton from "./ButtonStyledComponent";

const Button = ({ variant, disabled, children, startIcon, endIcon }) => {
  Button.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    disableshadow: PropTypes.bool,
    children: PropTypes.node,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
  };

  return (
    <StyledButton variant={variant} disabled={disabled} disableshadow>
      {startIcon && <span className="material-icons">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </StyledButton>
  );
};

export default Button;
