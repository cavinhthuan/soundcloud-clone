import React, { Suspense, lazy, useState } from "react";

import "./App.css";
import { io } from "socket.io-client";
import {
  Routes,
  Route,
  HashRouter,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Feed = lazy(() => import("./pages/Feed"));
const Library = lazy(() => import("./pages/Libary"));
const ResultSearch = lazy(() => import("./pages/ResultSearch"));

export const AppContext = React.createContext();

const socket = io("/");

const App = () => {
  return (
    <AppContext.Provider value={{ socket: socket }}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/search/:searchKey" element={<ResultSearch />} />
            <Route path="/your" element={<Library />}>
              <Route path="/your/library" element={<Library />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
