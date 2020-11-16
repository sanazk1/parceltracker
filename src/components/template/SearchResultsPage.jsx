// React core
import React from "react";
//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Card from "../molecules/Card";


export default function SearchPage({match,information}) {
  
  //console.log(matchId);
  //const query= new RegExp(parameter.params.query, "i");
//const results= information.filter((item) => item.parcel_id.match(query));
//const matchId = parameter.params.id;

const matchId= new RegExp(match.params.id, "i");
const results= information.filter((item) => item.id.match(matchId));
console.log(matchId);
console.log(results);
console.log(information);
const Cards= results.map((item) => {
    return <Card key={item.id} data={item} />;
});
    

return (
    <div className= "search-page">
        <Header />
        <Link className= "button" to="/">
            Back to Home
          </Link>
        <section className= "container">
            {/*<h3>Following are your parcels: </h3>*/}
            <div className= "grid">{Cards}</div>
        </section>
        <Link className= "button" to="/">
            Back to Home
          </Link>
        <Footer />
        
        
    </div>
    );
}