import Button from "../button/Button";

const buttonProps = [
  { children: "Default" },
  { children: "Outlined", variant: "outline" },
  { children: "Text", variant: "text" },
  { children: "Disable Shadow", disableShadow: true },
  { children: "Disabled", disabled: true },
  { children: "Text-disabled", variant: "text", disabled: true },
  { children: "Botón", startIcon: "local_grocery_store" },
  { children: "Botón", endIcon: "local_grocery_store" },
  { children: "Botón", size: "sm" },
  { children: "Botón", size: "md" },
  { children: "Botón", size: "lg" },
  { children: "default", color: "default" },
  { children: "primary", color: "primary" },
  { children: "secondary", color: "secondary" },
];

const phrases = [
  "<Button />",
  '<Button variant="outline" />',
  '<Button variant="text" />',
  "<Button disableShadow />",
  "<Button disabled />",
  '"<Button variant="text" disabled />"',
  '<Button startIcon="local_grocery_store" />',
  '<Button endIcon="local_grocery_store" />',
  '<Button size="sm" />',
  '<Button size="md" />',
  '<Button size="lg" />',
  '<Button color="default" />',
  '<Button color="primary" />',
  '<Button color="secondary" />',
];
const Buttons = () => {
  return (
    <div className="container-buttons">
      <div>
        {phrases.map((phrase, index) => (
          <div key={index}>
            <p>{phrase}</p>
            <Button {...buttonProps[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Buttons;
