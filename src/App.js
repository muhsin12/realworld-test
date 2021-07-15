import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./sections/header";
import MainContainer from "./sections/MainContainer";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header></Header>
        <MainContainer></MainContainer>
        
      </div>
    </Router>
  );
}

export default App;
