import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={darkmode ? "dark" : ""}>
      <Header nightOrDay={setDarkmode} />
      <Main />
    </div>
  );
};

export default Home;
