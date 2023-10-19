import { useState } from "react";
import "./Header.css";

const Header = ({ nightOrDay }) => {
  const [isNight, setIsNight] = useState(false);

  const dayOrNight = () => {
    nightOrDay((darkmode) => !darkmode);
    setIsNight((prevIsNight) => !prevIsNight);
  };

  return (
    <header>
      <section className="headerSection">
        <h1>{isNight ? "Night" : "Day"}</h1>

        <div>
          <button onClick={dayOrNight}>
            Change to {isNight ? "Day" : "Night"}
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
