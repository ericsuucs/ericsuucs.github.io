import React, { Component } from "react";
import logo from "./lilxanfan.png";
import elon from "./isitpossible.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="powerful">Time Does Not Exist In A Vaccum</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is mars:</h2>
          <img src="https://www.washingtonpost.com/resizer/nF0Ep9wjnMUMs2xAw4PYBt6IiWY=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EHBDQNJ6VY2E3JROUFOMONLBQQ.jpg" alt=""/>
          <h3>This is elon:</h3>
          <img src="https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/Elon_Musk_bowtie_XL_721_420_80_s_c1.jpg" alt=""/>
          <h3>Do you think he can make it..?</h3>
          <img src={elon} alt=""/>
          
        </header>
      </div>
    );
  }
}

const Advertisement = () => {
  return (
    <img
      src="http://prosolutionpills2016.com/sites/default/files/pictures/prosolution.jpg"
      style={{ width: "100%", height: "auto" }}
      alt="GAY"
    />
  );
};

const Advertisement1 = () => {
  return (
    <img
      src="https://static.fjcdn.com/pictures/Ron_dfc457_1752241.jpg"
      style={{ width: "100%", height: "auto" }}
      alt="GAY"
    />
  );
};

export default App;
