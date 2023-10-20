import "./App.css";
import Buttons from "./component/buttonsBanner/Buttons";
import Footer from "./component/footer/Footer";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Buttons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
