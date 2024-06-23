import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contributors from "./pages/Contributors";
import Audio from "./pages/resources/Audio";
import ChanakyaAudio from "./pages/resources/audio/ChanakyaAudio";
import Video from "./pages/resources/Video";
import ChanakyaVideo from "./pages/resources/video/ChanakyaVideo";
import Book from "./pages/resources/Book";
import ChanakyaBook from "./pages/resources/book/ChanakyaBook";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className='container d-flex flex-column min-vh-100'>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <main className="flex-grow-1 container mt-4">
          <Routes>
            <Route exact path="/" element={<Home setProgress={setProgress} />} />
            <Route exact path="/about" element={<About setProgress={setProgress} />} />

            {/* Audio Resource Pages */}
            <Route exact path="/resources/audio" element={<Audio />} />
            <Route exact path="/resources/audio/ChanakyaNiti" element={<ChanakyaAudio setProgress={setProgress} />} />

            {/* Video Resource Pages */}
            <Route exact path="/resources/video" element={<Video />} />
            <Route exact path="/resources/video/ChanakyaNiti" element={<ChanakyaVideo setProgress={setProgress} />} />

            {/* Book Resource Pages */}
            <Route exact path="/resources/book" element={<Book />} />
            <Route exact path="/resources/book/ChanakyaNiti" element={<ChanakyaBook setProgress={setProgress} />} />

            <Route exact path="/contributor" element={<Contributors setProgress={setProgress} />} />

            {/* Authentication Pages */}
            <Route exact path="/auth/SignIn" element={<SignIn />} />
            <Route exact path="/auth/SignUp" element={<SignUp />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
