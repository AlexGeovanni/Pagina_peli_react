import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import { BuscaMovi } from "./components/buscadorMovi";
import { LadingPage } from "./pages/ladingPage";
import {DetailMovi} from "./pages/movieDetalle"

function App() {
  return (
    <Router>
        <header>
        <Link to="/"><h1 className="title">Peliculas</h1></Link>
        <BuscaMovi />
        </header>
        <main>
          <Routes>
            <Route path="/movies/:movieId" element={<DetailMovi />} />
            <Route path="/" element={<LadingPage />} />
              
          </Routes>
        </main>
    </Router>
  );
}

export default App;
