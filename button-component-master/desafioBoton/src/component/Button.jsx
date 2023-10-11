import PropTypes from "prop-types";
import {
  getBorder,
  getBoxShadow,
  getHoverBackgroundColor,
  getColor,
  getBackgroundColor,
  getWidth,
  getHeight,
} from "./ButtonFuctionStyled";
import StyledButton from "./ButtonStyledComponent";

const Button = ({
  variant,
  disabled,
  children,
  startIcon,
  endIcon,
  disableShadow,
  size,
}) => {
  Button.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    disableShadow: PropTypes.bool,
    size: PropTypes.string,
  };

  // Definir estilos basados en las propiedades
  const styles = {
    width: getWidth(size),
    height: getHeight(size),
    backgroundColor: getBackgroundColor(
      variant,
      disabled,
      startIcon,
      endIcon,
      disableShadow,
      size
    ),
    color: getColor(variant, disabled, startIcon, endIcon, disableShadow, size),
    border: getBorder(variant),
    boxShadow: getBoxShadow(variant, disableShadow),
    hoverBackgroundColor: getHoverBackgroundColor(
      variant,
      disabled,
      disableShadow,
      startIcon,
      endIcon,
      size
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
