import Button from "../button/Button";
import "../../scss/component/buttonsBanner/Buttons.scss";

const groups = [
  {
    key: "default",
    buttons: [
      {
        phrase: "<Button />",
        value: { children: "Default" },
      },
    ],
  },
  {
    key: "variant",
    buttons: [
      {
        phrase: '<Button variant="outline" />',
        value: { children: "Default", variant: "outline" },
      },
      {
        phrase: '<Button variant="text" />',
        value: { children: "Default", variant: "text" },
      },
    ],
  },
  {
    key: "disableShadow",
    buttons: [
      {
        phrase: "<Button disableShadow />",
        value: { children: "Default", disableShadow: true },
      },
    ],
  },
  {
    key: "disabled",
    buttons: [
      {
        phrase: "<Button disabled />",
        value: { children: "Default", disabled: true },
      },
    ],
  },
  {
    key: "Icon",
    buttons: [
      {
        phrase: '<Button startIcon="local_grocery_store" />',
        value: { children: "Default", startIcon: "local_grocery_store" },
      },
      {
        phrase: '<Button endIcon="local_grocery_store" />',
        value: { children: "Default", endIcon: "local_grocery_store" },
      },
    ],
  },
  {
    key: "size",
    buttons: [
      {
        phrase: '<Button size="sm" />',
        value: { children: "Default", size: "sm" },
      },
      {
        phrase: '<Button size="md" />',
        value: { children: "Default", size: "md" },
      },
      {
        phrase: '<Button size="lg" />',
        value: { children: "Default", size: "lg" },
      },
    ],
  },

  {
    key: "color",
    buttons: [
      {
        phrase: '<Button color="default" />',
        value: { children: "Default", color: "default" },
      },
      {
        phrase: '<Button color="primary" />',
        value: { children: "Default", color: "primary" },
      },
      {
        phrase: '<Button color="secondary" />',
        value: { children: "Default", color: "secondary" },
      },
      {
        phrase: '<Button color="danger" />',
        value: { children: "Default", color: "danger" },
      },
    ],
  },
];

// const buttonProps = [
//   { children: "Default" },
//   { children: "Default", variant: "outline" },
//   { children: "Default", variant: "text" },
//   { children: "Default", disableShadow: true },
//   { children: "Default", disabled: true },
//   { children: "Default", variant: "text", disabled: true },
//   { children: "Default", startIcon: "local_grocery_store" },
//   { children: "Default", endIcon: "local_grocery_store" },
//   { children: "Default", size: "sm" },
//   { children: "Default", size: "md" },
//   { children: "Default", size: "lg" },
//   { children: "Default", color: "default" },
//   { children: "Default", color: "primary" },
//   { children: "Default", color: "secondary" },
// ];
//
// const phrases = [
//   "<Button />",
//   '<Button variant="outline" />',
//   '<Button variant="text" />',
//   "<Button disableShadow />",
//   "<Button disabled />",
//   '"<Button variant="text" disabled />"',
//   '<Button startIcon="local_grocery_store" />',
//   '<Button endIcon="local_grocery_store" />',
//   '<Button size="sm" />',
//   '<Button size="md" />',
//   '<Button size="lg" />',
//   '<Button color="default" />',
//   '<Button color="primary" />',
//   '<Button color="secondary" />',
// ];
const Buttons = () => {
  return (
    <div className="container-buttons">
      <h3>Buttons</h3>
      <div className="buttons">
        {groups.map((group) => (
          <div className="group-botton" key={group.key}>
            {group.buttons.map((boton) => (
              <div key={boton.phrase}>
                <p>{boton.phrase}</p>
                <Button {...boton.value} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Buttons;
