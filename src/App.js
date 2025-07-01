import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter
      basename="/"
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
