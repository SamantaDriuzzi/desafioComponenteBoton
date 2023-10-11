import PropTypes from "prop-types";
import {
  getBorder,
  getBoxShadow,
  getHoverBackgroundColor,
  getColor,
  getBackgroundColor,
} from "./ButtonFuctionStyled";
import StyledButton from "./ButtonStyledComponent";

const Button = ({
  variant,
  disabled,
  children,
  startIcon,
  endIcon,
  disableShadow,
}) => {
  Button.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    disableShadow: PropTypes.bool,
  };

  // Definir estilos basados en las propiedades
  const styles = {
    backgroundColor: getBackgroundColor(
      variant,
      disabled,
      startIcon,
      endIcon,
      disableShadow
    ),
    color: getColor(variant, disabled, startIcon, endIcon, disableShadow),
    border: getBorder(variant),
    boxShadow: getBoxShadow(variant, disableShadow),
    hoverBackgroundColor: getHoverBackgroundColor(
      variant,
      disabled,
      disableShadow,
      startIcon,
      endIcon
    ),
  };

  return (
    <StyledButton styles={styles}>
      <span className="material-icons">{startIcon}</span>
      {children}
      <span className="material-icons">{endIcon}</span>
    </StyledButton>
  );
};

export default Button;
