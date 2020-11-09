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

  //0= loading, 1= ready, 2= error
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
        setStatus(1);
      }
      catch {
        setStatus(2);
      }
    };
    getData();
  }, []);
//const list = data;
  return (
      <Router>
        <div className="App">
        {status === 0 ? <p>Loading..</p> : null}
        {status === 2 ? <p>Error, Cant fetch data!</p> : null}
        {status === 1 ?
          <Switch>
          <Route path="/" exact render = {()=> <HomePage/>} />
          <Route path="/result/:parameter"
            render={({ match }) => (
              <SearchResultsPage parameter={match.params.parameter} information={information} />
            )}
          />
          </Switch>
           : null}
        </div>
      </Router>
  );
}