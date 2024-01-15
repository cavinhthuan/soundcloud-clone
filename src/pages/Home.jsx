import React, { useContext, useEffect } from "react";
import logo from "../logo.svg";
import TestAPI from "../TestAPI";
import Layout from "../static/Layout";
const Home = () => {
  return (
    <Layout title="Home">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <TestAPI />
        </header>
      </div>
      {/* sample */}
       
    </Layout>
  );
};
export default Home;
