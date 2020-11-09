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

  
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const endpoint= "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect( () => {
    const getData = async () => {
      try {
        const response= await fetch(endpoint, { mode: "cors"});
        const data= await response.json();
        console.log(data);
        setInformation(data);
        console.log("informatiolkkhnn");
        console.log(information);
        console.log("information");
      }
      catch {
        console.log("Error while fetching API");
      }
    };
    getData();
  }, []);

  return (
   
      <Router>
        <div className="App">
       
          <Switch>
          <Route path="/" exact render = {()=> <HomePage/>} />
          <Route path="/result/:parameter"
            render={({ match }) => (
              <SearchResultsPage match={match} information={information} />
            )}
          />
          </Switch>
          
        </div>
      </Router>
  );
}