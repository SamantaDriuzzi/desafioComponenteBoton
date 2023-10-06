import styled from "styled-components";

const StyledButton = styled.button`
  width: 81px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 6px;
  text-align: center;
  font-family: "Noto Sans JP";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  box-sizing: border-box;
  padding: 10px;

  background-color: ${(props) =>
    props.variant === "outline"
      ? "transparent"
      : props.endIcon
      ? "#3d5afe"
      : props.variant === "text"
      ? "transparent"
      : props.disableShadow
      ? "#3d5afe"
      : props.disabled
      ? "#e0e0e0"
      : props.variant === "text" && props.disabled
      ? "transparent"
      : "#e0e0e0"};

  color: ${(props) =>
    props.variant === "outline"
      ? "#3d5afe"
      : props.variant === "text" && !props.disabled
      ? "#3d5afe"
      : props.disableShadow
      ? "#FFF"
      : props.disabled
      ? "#9E9E9E"
      : props.disabled && props.variant === "text"
      ? "#9E9E9E"
      : props.startIcon
      ? "#FFF"
      : "#3f3f3f"};

  border: ${(props) =>
    props.variant === "outline" ? "1px solid #3d5afe" : "none"};

  box-shadow: ${(props) =>
    props.variant === "outline"
      ? "none"
      : props.variant === "text"
      ? "none"
      : props.disableShadow
      ? "none"
      : "0px 2px 3px 0px rgba(51, 51, 51, 0.2)"};

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.variant === "outline"
        ? "rgba(41, 98, 255, 0.10)"
        : props.variant === "text" && !props.disabled
        ? "rgba(41, 98, 255, 0.10)"
        : props.variant === "text" && props.disabled
        ? "transparent"
        : props.disableShadow
        ? "#3d5afe"
        : props.disabled
        ? "#e0e0e0"
        : "#aeaeae"};
  }
`;
export default StyledButton;
