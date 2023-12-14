import "./App.css";
import RoutesController from "./features/router/components/RoutesController";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RoutesController />
    </BrowserRouter>
  );
}

export default App;
