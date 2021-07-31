import Header from "./component/Header";
function App() {
  const name = false;
  const x = true;
  return (
    <div className="container">
      <Header />
      <h1>Hello From React</h1>
      <h2>Hello {x == true ? "Yes" : "No"}</h2>

    </div>
  );
}

export default App;
