import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Components
import ImgView from './components/ImgView';
import Login from './components/Login';
import Logout from './components/Logout';

// Icons
import { Sun } from 'lucide-react';

function NavBar() {
  return (
    <>
    </>
  )
}


// Main App
function App() {
  return (
    <main>
      <Router>
        {/* <NavBar /> */}
        <ImgView />
        <section>
          <Routes>
            <Route></Route> {/* Home */}
            <Route></Route> {/* LogIn */}
            <Route></Route> {/* LogOut */}
          </Routes>
        </section>
      </Router>
    </main>
  )
}

export default App
