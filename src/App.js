import React from "react";
import "./normalize.css";
import "./App.css";
import "./Responsive/css/responsive.css";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
