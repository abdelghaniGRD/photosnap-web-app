import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stories from "./Stories";
import BoardGames from "./BoardGames";
import Features from "./Features";
import Pricing from "./Pricing";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/stories" element={<Stories />}></Route>
          <Route path="/boardgames" element={<BoardGames />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
