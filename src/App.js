import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config, sortByCreatedTime } from "./services";
import Hexagon from "./components/Hexagon";
import "./App.css";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      // const resp = await axios.get(baseURL, config);
      // setRecords(sortByCreatedTime(resp.data.records))
    }
    fetchRecords();
  }, []);

  const letters = ["F", "A", "C", "T", "O", "R", "Y"];

  return (
    <div className="hexagon-container">
      {letters.map((letter, index) => <Hexagon letter={letter} index={index} />)}
    </div>
  );
}

export default App;
