// React core
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";

export default function SearchPage({parameter,information}) {
  
    const result = information.filter((item) => {return (item.parcel_id)===(parameter)});
    console.log(result);
    if(result[0] === undefined){
        return (
            <div className="search-page">
                <Header />
                <h1>Your Parcel Details</h1>
                <p> Could not find entered parcel number , Please check your tracking number again</p>
                {/* Replace with Link later */}
                <Link className="button" to="/">
                 Back to home
                </Link>
            </div>     
        );
        }else
        return (
            <div className="search-page">
                <Header />
                <h1>Your Parcel Details</h1>
                <Card data={result}/>
                <h3>Thank you for visiting!!</h3>
                {/* Replace with Link later */}
                <Link className="button" to="/">
                 Back to home
                </Link>
            </div>
        );
    }