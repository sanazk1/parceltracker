//style
import "./css/style.css";
//components
import HomePage from "./components/template/HomePage";
import SearchResultsPage from "./components/template/SearchResultsPage";


function App() {
  
  return (
    <div className="App">
      <HomePage/>
      <SearchResultsPage/>
    </div>
  );
}

export default App;
