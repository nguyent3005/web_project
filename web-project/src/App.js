import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Following from "./page/Home copy";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<Following />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
