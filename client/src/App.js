import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { LandingPage } from "./pages";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
