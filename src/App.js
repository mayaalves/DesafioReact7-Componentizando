import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style: none;
}
body{
background-color: #5b4669;
background-image: linear-gradient(21deg, #5b4669 10%, #8865a0 36%, #b1b7cf 79%);

}
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
