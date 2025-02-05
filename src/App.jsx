import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mood from "./pages/Mood";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Moodie4anime" element={<Home />} />
        <Route path="/mood/:mood" element={<Mood />} />

        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>404: Page Not Found</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
