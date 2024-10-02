import React from "react";
import Header from "./Header";
import HomeVideo from "./HomeVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marquee from "./Marquee";
import Home from "./Home";
import Scroll from "./Scroll";
import Move from "./Move";
import Invite from "./Invite";
import Content from "./Content";
import Title from "./Title";
import Chain from "./Chain";
import Give from "./Give";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <HomeVideo />
                <Marquee />
                <Home />
                <Scroll />
                <Move />
                <Invite />
                <Content />
                <Title />
                <Chain />
                <Give />
                <Footer />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
