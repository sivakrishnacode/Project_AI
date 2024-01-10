import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ask from "./pages/Ask";
import ImageGenerator from './pages/ImageGenerator'
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Ask />} />
        <Route path="/image" element={<ImageGenerator />} />
        {/* <Route path="/jsbot" element={<Jsbot />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/complexity" element={<Complexity />} />
        <Route path="/aichat" element={<AIchat />} /> */}
       
        {/* <Route path="/bugfixer" element={<BugFixer />} />
        <Route path="/ques" element={<QuesAndAns />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
