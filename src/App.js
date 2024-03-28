import logo from "./logo.svg";
import "./App.css";

import Main from "./components/main";
import Calendly from "./components/calendly";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (window.location.pathname == "/calendly") {
      setPage("calendly");
    } else {
      setPage("home");
    }
  });

  return (
    <>
      {/* {page == "home" && <Main />} */}
      {page == "calendly" && <Calendly />}
    </>
  );
}

export default App;
