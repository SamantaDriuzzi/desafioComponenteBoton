import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-shrink: 0;
  border-radius: 6px;
  text-align: center;
  justify-content: center;
  font-family: "Noto Sans JP";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  box-sizing: border-box;
  padding: 10px;
  align-items: center;
  width: ${(props) => props.styles.width};
  height: ${(props) => props.styles.height};
  background-color: ${(props) => props.styles.backgroundColor};
  color: ${(props) => props.styles.color};
  border: ${(props) => props.styles.border};
  box-shadow: ${(props) => props.styles.boxShadow};

  &:hover,
  &:focus {
    background-color: ${(props) => props.styles.hoverBackgroundColor};
  }
`;
export default StyledButton;
