//style
import "./css/style.css";
//components
import Header from "./components/organisms/Header";
import SearchForm from "./components/molecules/SearchForm";

function App() {
  
  return (
    <div className="App">
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
