// React core
import React from "react";
//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../organisms/Header";
import Card from "../molecules/Card";


export default function SearchPage({parameter,information}) {
    //const matchId = parameter.params.id;
  //console.log(matchId);
    const {
        status,
        eta,
        parcel_id,
        sender,
        verification_required,
        location_name,
        location_coordinate_latitude,
        location_coordinate_longitude,
        user_phone,
        user_name,
        last_updated,
      } = information;

  
   
        return (
            <div className="search-page">
             <Header />
             <div className="text-container">
                <h1>Your Parcel Details</h1>
                <h3 className="parcel-id">#Parcel ID: {parcel_id}</h3>
                    <p>UserName: {user_name}</p>
                    <p>Registered phone number: {user_phone}</p>
                    <p>Order status: {status}</p>
                    <p>ETA: {eta}</p>
                    <p>Last Updated: {last_updated}</p>
                    <p>Verification Required: {verification_required}</p>
                    <p>Sender: {sender}</p>
                    <p>Pickup Location: {location_name}</p>
                    <p>Pickup Coordinate: {location_coordinate_latitude},{location_coordinate_longitude}</p>
                <h3>Thank you for visiting!!</h3>
               
                <Link className="button" to="/">
                 Back to home
                </Link>
            </div>
        </div>
        );
    }