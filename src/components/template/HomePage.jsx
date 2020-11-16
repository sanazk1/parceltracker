// React core
import React from "react";


// Components
import SearchForm from "../molecules/SearchForm";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
//import Card from "../molecules/Card";

export default function HomePage({information}) {
  
  
  return (
    <div className="home-page">
      <Header />
      <SearchForm />
      <Footer />
    </div>
  );
}

     
    
