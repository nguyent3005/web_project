import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Following from "./page/Following";

import { publicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<Following />} />
          {/* {publicRoutes.map((route, index) => {
            const Page = route.Component;
            return <Route key={index} path="route.path" element={<Page />} />;
          })} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
