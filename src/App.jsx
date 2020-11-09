//React Core
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//style
import "./css/style.css";
//components
import HomePage from "./components/template/HomePage";
import SearchResultsPage from "./components/template/SearchResultsPage";
import Card from "./components/molecules/Card";


export default function App() {

  const [information, setInformation] = useState([]);
  const endPoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {  
    getData();
  }, []);

  const getData = async () => {  
  try{
    const response = await fetch(endPoint,{mode:"cors"});  
      const data = await response.json();     
      setInformation(data); 
      console.log(information);
  }catch{
    console.log("Error while fetching API");
  }
};
//const list = data;
  return (
      <Router>
        <div className="App">
          <Switch>
          <Route path="/" exact render = {()=> <HomePage/>} />
          <Route path="/result/:parameter"
            render={({ match }) => (
              <SearchResultsPage parameter={match.params.parameter} information={information} />
            )}
          />
          </Switch>
        </div>
      </Router>
  );
}