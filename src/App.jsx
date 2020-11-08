//import logo from './assets/images/logo.png';
import "./css/style.css";
import Header from "./components/organisms/Header";
import information from "./information.json"

function App() {
  console.log(information)
  console.log("App component")
  
  return (
    <div className="App">
      <h1></h1>
      <Header data={information[0]} />
    </div>
  );
}

export default App;
