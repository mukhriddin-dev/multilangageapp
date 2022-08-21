import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import content from "./lang/lang";
import Dashboard from "./components/Dashboard/Dashboard";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Projects";
import Error from "./components/404/Error";

const App = () => {

  const [langs, setLangs] = useState('en');

  return (
    <>
      <BrowserRouter>
        <Navbar lang={content[langs]} setLangs={setLangs} />
        <main>
          <Routes>

            <Route path="/" element={<Dashboard/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="*" element={<Error lang={content[langs]} />}/>

          </Routes>
        </main>
        <Footer lang={content[langs]} />
      </BrowserRouter>
    </>
  );
};

export default App;