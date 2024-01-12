import "./index.css";

function App() {
  console.log("test");
  return (
    <div className="App">
      <Avbar></Avbar>
      <div className="cardContainer">
        <div className="section1">
          <Card1></Card1>
          <Card1></Card1>
          <Card1></Card1>
        </div>
        <div className="section2">
          <Card1></Card1>
          <Card1></Card1>
          <Card1></Card1>
        </div>
      </div>

      <main className="main">
        <h2>GIVEN UP</h2>
      </main>
      <footer className="footer">
        <h2>contact me</h2>
      </footer>
    </div>
  );
}
function Card1() {
  return (
    <div className="Card1">
      <div className="imgContainer">
        <img src="" alt="test" />
      </div>
      <h1 className="text1">hey</h1>
      <h2 className="text2">hei</h2>
    </div>
  );
}

function Avbar() {
  const givenUp = "kjøøøøøøøøøøtt";

  return (
    <header className="header">
      <h1>{givenUp}</h1>
    </header>
  );
}

export default App;
// npm run dev (for å kjøre koden)
