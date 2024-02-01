import React, { Suspense, lazy, useState } from "react";

import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { SWRConfig } from "swr";
import Loading from "static/Loading";

const Home = lazy(() => import("./pages/Home"));
const Discover = lazy(() => import("./pages/Discover"));
const About = lazy(() => import("./pages/About"));
const Feed = lazy(() => import("./pages/Feed"));
const Library = lazy(() => import("./pages/Libary"));
const ResultSearch = lazy(() => import("./pages/ResultSearch"));
const Playlist = lazy(() => import("./pages/Playlist"));

export const AppContext = React.createContext();

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: async ({ endpoint }) => {
          var requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          const res = await fetch(endpoint, requestOptions);
          return res.json();
        },
        suspense: true,
      }}
    >
      <AppContext.Provider value={{media: document.createElement("AUDIO") }}>
        <BrowserRouter>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/search/:searchKey" element={<ResultSearch />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/your" element={<Library />}>
                <Route path="/your/library" element={<Library />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppContext.Provider>
    </SWRConfig>
  );
};

export default App;
