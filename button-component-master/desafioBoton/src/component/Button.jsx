import "../scss/component/Button.scss";

const Button = () => {
  return (
    <div className="card">
      <button>Default</button>
      <button className="button-variant-outline">Default</button>
      <button className="button-variant-text"> text</button>
      <button className="button-disable-shadow"> disable shadow</button>
      <button className="button-disabled"> disabled</button>
    </div>
  );
};
export default Button;
