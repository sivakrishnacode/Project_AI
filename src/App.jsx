import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ask from "./pages/Ask";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        {/* <Route path="/" element={<ImageGenerator />} /> */}
        {/* <Route path="/jsbot" element={<Jsbot />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/complexity" element={<Complexity />} />
        <Route path="/aichat" element={<AIchat />} /> */}
        <Route path="/" element={<Ask />} />
        {/* <Route path="/bugfixer" element={<BugFixer />} />
        <Route path="/ques" element={<QuesAndAns />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
