function getColor(variant, disabled, startIcon, endIcon, disableShadow) {
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
    : startIcon === "local_grocery_store" || endIcon === "local_grocery_store"
    ? "#FFF"
    : "#3f3f3f";
}
function getBackgroundColor(
  variant,
  disabled,
  startIcon,
  endIcon,
  disableShadow
) {
  return variant === "outline"
    ? "transparent"
    : variant === "text" || (variant === "text" && disabled)
    ? "transparent"
    : disableShadow
    ? "#3d5afe"
    : disabled
    ? "#e0e0e0"
    : startIcon === "local_grocery_store" || endIcon === "local_grocery_store"
    ? "#3d5afe"
    : "#e0e0e0";
}
function getBoxShadow(variant, disableShadow) {
  return variant === "outline"
    ? "none"
    : variant === "text"
    ? "none"
    : disableShadow
    ? "none"
    : "0px 2px 3px 0px rgba(51, 51, 51, 0.2)";
}
function getBorder(variant) {
  return variant === "outline" ? "1px solid #3d5afe" : "none";
}
function getHoverBackgroundColor(
  variant,
  disabled,
  disableShadow,
  startIcon,
  endIcon
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
    : startIcon === "local_grocery_store" || endIcon === "local_grocery_store"
    ? "none"
    : "#aeaeae";
}
export {
  getColor,
  getBackgroundColor,
  getBorder,
  getBoxShadow,
  getHoverBackgroundColor,
};
