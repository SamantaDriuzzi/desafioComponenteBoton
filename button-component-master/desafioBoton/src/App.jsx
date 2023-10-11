import "./App.css";
import Button from "./component/Button.jsx";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <div className="container-buttons">
        <Button>Default</Button>
        <Button variant={"outline"}>Outlined</Button>
        <Button variant={"text"}>Text</Button>
        <Button disableShadow>disableshadow</Button>
        <Button disabled>Disabled</Button>
        <Button variant={"text"} disabled>
          Text-disabled
        </Button>
        <Button startIcon="local_grocery_store">Botón</Button>
        <Button endIcon="local_grocery_store">Botón</Button>
      </div>
    </>
  );
}

export default App;
