import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import content from "./lang/lang";
import Dashboard from "./components/Dashboard/Dashboard";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Projects";
import Error from "./components/404/Error";
import Login from "./components/login/Login";
import Private from "./private/Private";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [langs, setLangs] = useState("en");
  const [auth, setAuth] = useState(false);


  const user = {
    username: "admin-admin",
    password: "123",
  };


  const useAuth = (username, password, check) => {

    if (check.login && check.password) {
      toast.error('please fill input form', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {

    }

    if (user.username === username && user.password === password) {
      setAuth(true);
      console.log(auth);
      toast.success('logined', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      setAuth(false);
      console.log(auth);
      toast.error('error', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    console.log('isworking');
  };



  return (
    <>
      <BrowserRouter>

        <ToastContainer />

        <Navbar
          lang={content[langs]}
          setLangs={setLangs}
          auth={auth}
          isAuth={setAuth}
        />
        <main>
          <Routes>
            <Route path="/" element={<Private isAuth={auth} auth={useAuth} />}>

              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/login" element={<Login auth={useAuth} />} />

            </Route>



            <Route path="*" element={<Error lang={content[langs]} />} />

          </Routes>
        </main>
        <Footer lang={content[langs]} auth={auth} />
      </BrowserRouter>
    </>
  );
};

export default App;
