import "./App.css";
import Button from "./component/Button";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <div className="container-buttons">
        <Button>Default</Button>
        <Button variant={"outline"}>Outlined</Button>
        <Button variant={"text"}>Text</Button>
        <Button disableshadow>Default</Button>
        <Button disabled>Default-disabled</Button>
        <Button variant={"text"} disabled>
          Text-disabled
        </Button>
        <Button startIcon={"local_grocery_store"}>Botón</Button>
        <Button endIcon={"local_grocery_store"}>Botón</Button>
      </div>
    </>
  );
}

export default App;
