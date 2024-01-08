import "./index.css";



function App() { 
  return(
    <div className="App">
      <Avbar></Avbar>


    <main className="main">
      <h2>GIVEN UP</h2>
    </main>

    <footer className="footer">
      <h2>contact me</h2>
    </footer>
  
    </div>
  )
  
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
