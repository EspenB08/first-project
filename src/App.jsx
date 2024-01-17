import "./index.css";
import Card1 from "./component/card1.jsx";
import Card2 from "./component/card2.jsx";
console.log("articles");
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="cardContainer">
        <div className="section1">
          <Card1></Card1>
          <Card2></Card2>
          <Card1></Card1>

        </div>
        <div className="section2">
          <Card2></Card2>
          <Card1></Card1>
          <Card2></Card2>
      
        </div>
      </div>


    </div>
  );
}


function Navbar() {
  
  const givenUp = "kjøøøøøøøøøøtt";

  return (
    <header className="header">
      <h1>{givenUp}</h1>
    </header>
  );
}

export default App;
// npm run dev (for å kjøre koden)
