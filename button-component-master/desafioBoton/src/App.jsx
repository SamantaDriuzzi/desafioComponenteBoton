import "./App.css";
import Button from "./component/Button";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <div className="container-buttons">
        <Button>Default</Button>
        <Button variant={"outline"}>Default</Button>
        <Button variant={"text"}>Default</Button>
        <Button disableShadow>Default</Button>
        <Button disabled>Default</Button>
        <Button variant={"text"} disabled>
          Default
        </Button>
      </div>
    </>
  );
}

export default App;
