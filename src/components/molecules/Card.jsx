// React core
import React from "react";
//import { Link } from "react-router-dom";
import SearchResultsPage from "../template/SearchResultsPage";
function Card({ data }) {
    console.log(data);



    const orderID = data.map(item => {
        return (<div key={item.id}>
                
                {item.id}
                
                </div>);
                 });

    const sender = data.map(item => {
        return (<div key={item.id}>
                
                {item.sender}
              
                </div>
        )});

 
{/* <Link to={`/Card/${item.id}`}>
            </Link> */}
    
            return (


        <div className="card">

            Please select ID to view order details
            <table className="short-card">
            
            <td>OrderID</td> <td>Sender</td>
            <tr><td>{orderID}</td> <td>{sender}</td></tr>

            </table>
        </div>

    );
}
export default Card;