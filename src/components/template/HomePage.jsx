// React core
import React from "react";


// Components
import SearchForm from "../molecules/SearchForm";
import Header from "../organisms/Header";
//import Card from "../molecules/Card";

export default function HomePage({information}) {
  

  return (
    <div className="home-page">
      <Header />
      <SearchForm />
    </div>
  );
}

     
    
