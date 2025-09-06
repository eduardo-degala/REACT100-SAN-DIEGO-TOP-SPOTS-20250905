//APP.JSX

//IMPORT
import React, {useEffect, useState} from "react";           //imports react & special tools/hooks from library, useEffect allows code to run after component is shown on screen, useState allows state creation f/data that changes   
import axios from "axios";
import './App.css'                                          //imports CSS styles from local file
import TopSpots from './TopSpots';                          //import component, TopSpots.jsx recd prop SPOTS for spot.name spot.description and spot.location, info from TopSpot.jsx defined mapLink/button

//APP
function App() {                                            //defines component App, reuseable UI
  const [topSpots, setTopSpots] = useState([]);             //topSpots/setTopSpots array destructuring, current data/function used to change/update data
                                                            //useState([]) is a react hook, allows component to remember data taht can change over time
//GET REQUEST (DATA.JSON)
	  useEffect(() => {
	    axios
	      .get('https://ccc.helloworldbox.com/items/top_spots')
	      .then(response => {
          setTopSpots(response.data.data);
	      })
        .catch(console.error);
      }, []);
    
/*
useEffect(() => {                                           //arrow function, hook to fetch data from file data.json
  fetch("https://ccc.helloworldbox.com/items/top_spots")    //network request now GET request from API website, returns promise give result/error in future
  .then(res => res.json())                                  //response from fetch, res=response obj (data) res.json() clarifies actual json data inside
  .then(data => {setTopSpots(data.data)});                  //the API returns a structure like { data: [...]}, store data in state using state updater function setTopSpots, rerender, data viz & useable in UI
  .catch(console.error);                                    //if an error aka file missing/offline/etc, cathces error logs to browser
}, []);                                                     //empty dependency array, run effect once, when component first appears on screen
*/

/*JQUERY REFERENCE ONLY
//HOW TO $.getJSON _&_ NO THIS IS WRONG THIS IS JQUERY AND DOESNT WORK WITH REACT, REFORMAT TO TBODY IN RETURN-STYLING
//$(document).ready(function() {                            // depracated jQuery 3.0
$(function() {
    $.getJSON("data.json", function(data) {
        var tableBody = $("#topSpotsTable tbody");          // <tbody>

        $.each(data, function(index, spot) {                // loop through data array in the JSON data, removed data.toSpots to only data            
            var row = "<tr>"; 
            row += "<td>" + spot.name + "</td>";
            row += "<td>" + spot.description + "</td>";
            //row += "<td>" + spot.location + "</td>";      // change spot.location to clickable link
            var lat = spot.location[0];                     // data.json, location:[lat,long]
            var long = spot.location[1];                    // template is "https://www.google.com/maps?q=lat,long"
            var mapLink = `https://www.google.com/maps?q=${lat},${long}`; 
            //row += `<td><a href="${mapLink}" target="_blank">View Map</a></td>`; // adding bootstrap button class="btn btn-primary"
            row += `<td><a href="${mapLink}" target="_blank" class="btn btn-primary">View Map</a></td>`;
            row += "</tr>";
            tableBody.append(row);                          // add the new row to the table body
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching JSON:", textStatus, errorThrown); // log any errors
    });
});
*/



  return (
<>

{/* TITLE */}
<div className="container p-3 bg-primary mt-4 text-white">
  <h1>San Diego Top Spots</h1>
  <p>A list of the top 30 places to see in San Diego, California.</p>
</div>

  {/* "TABLE HEADER" STYLE */}
  <div className="container mt-3 bg-gray p-3">

    {/* Simulated table headers using Bootstrap grid */}
    <div className="row bg-primary text-white fw-bold pb-1 mb-4">
      <div className="col-md-4">Name</div>
      <div className="col-md-6">Description</div>
      <div className="col-md-2 text-start">Location</div>
    </div>

{/* TOPSPOTS */}

        <TopSpots spots={topSpots} />

</div>
</>


  );
}

export default App

