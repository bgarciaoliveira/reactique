import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./routes";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes />
      </div>
    </Router>
  );
}
