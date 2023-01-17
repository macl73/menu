import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import HomePage from "./components/HomePage.jsx";
import DriftPage from "./components/DriftPage.jsx";
import ForzaPage from "./components/ForzaPage.jsx";
import TimeAttackPage from "./components/TimeAttackPage.jsx";

export default function App() {
  return (
    <div>
      <Menu />
      <main className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </main>
    </div>
  );
};
