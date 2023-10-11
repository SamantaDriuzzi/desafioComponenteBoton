function getColor(
  variant,
  disabled,
  startIcon,
  endIcon,
  disableShadow,
  size,
  color
) {
  return variant === "outline"
    ? "#3d5afe"
    : variant === "text" && !disabled
    ? "#3d5afe"
    : disableShadow
    ? "#FFF"
    : disabled
    ? "#9E9E9E"
    : disabled && variant === "text"
    ? "#9E9E9E"
    : startIcon ||
      endIcon ||
      size ||
      color === "primary" ||
      color === "secondary"
    ? "#FFF"
    : "#3f3f3f";
}
function getBackgroundColor(
  variant,
  disabled,
  startIcon,
  endIcon,
  disableShadow,
  size,
  color
) {
  return variant === "outline"
    ? "transparent"
    : variant === "text" || (variant === "text" && disabled)
    ? "transparent"
    : disableShadow
    ? "#3d5afe"
    : disabled || color === "default"
    ? "#e0e0e0"
    : startIcon || endIcon || size || color === "primary"
    ? "#3d5afe"
    : color === "secondary"
    ? "#455A64"
    : "#e0e0e0";
}
function getBoxShadow(variant, disableShadow, color) {
  return variant === "outline"
    ? "none"
    : variant === "text"
    ? "none"
    : disableShadow
    ? "none"
    : color === "primary"
    ? "0px 2px 3px 0px rgba(41, 98, 255, 0.20)"
    : color === "secondary"
    ? "0px 2px 3px 0px rgba(69, 90, 100, 0.20)"
    : "0px 2px 3px 0px rgba(51, 51, 51, 0.20)";
}
function getBorder(variant) {
  return variant === "outline" ? "1px solid #3d5afe" : "none";
}
function getHoverBackgroundColor(
  variant,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  size,
  color
) {
  return variant === "outline"
    ? "rgba(41, 98, 255, 0.10)"
    : variant === "text" && !disabled
    ? "rgba(41, 98, 255, 0.10)"
    : variant === "text" && disabled
    ? "none"
    : disableShadow
    ? "none"
    : disabled
    ? "none"
    : startIcon || endIcon || size
    ? "none"
    : color === "primary"
    ? "#0039CB"
    : color === "secondary"
    ? "#1C313A"
    : "#aeaeae";
}

function getWidth(size) {
  return size === "sm"
    ? "73px"
    : size === "md"
    ? "81px"
    : size === "lg"
    ? "93px"
    : "81px";
}

function getHeight(size) {
  return size === "sm"
    ? "32px"
    : size === "md"
    ? "36px"
    : size === "lg"
    ? "42px"
    : "36px";
}

export {
  getColor,
  getBackgroundColor,
  getBorder,
  getBoxShadow,
  getHoverBackgroundColor,
  getWidth,
  getHeight,
};
