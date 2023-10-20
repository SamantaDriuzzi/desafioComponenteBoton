import { useState } from "react";
import "../../scss/component/Sidebar/Sidebar.scss";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const menuItems = [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "space", label: "Space" },
    { id: "buttons", label: "Buttons" },
    { id: "inputs", label: "Inputs" },
    { id: "grids", label: "Grids" },
  ];

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className="sidebar-container">
      <h2>
        <span>Dev</span>challenges.io
      </h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeButton === item.id ? "active" : ""}
              onClick={() => handleButtonClick(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
