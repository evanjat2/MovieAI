
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { LandingPage, ExplorePage } from "./pages";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
        <Route path="explore" element={<ExplorePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
