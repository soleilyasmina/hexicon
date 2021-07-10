import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config, sortByCreatedTime } from "./services";
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

  return (
    <div className="App">
      { /* get hacking! */ }
    </div>
  );
}

export default App;
