/*TOPSPOT_S_
TopSpots.jsx handles rendering a list of TopSpot components. App.jsx is your main component 
that usually sets up layout and routes, and brings all other components together. Each component 
should do one thing and do it well.  "Separation of Concerns."
*/

import TopSpot from "./TopSpot";

const TopSpots = ({ spots }) => {
    return (

    <div data-testid="topspots">
      {spots.map((spot, index) => (
        <TopSpot
          key={index}
          name={spot.name}
          description={spot.description}
          location={spot.location}
        />
      ))}
    </div>

	);
};


export default TopSpots;

/*
imports from TOPSPOT_ to be used for array of objects
defines TOPSPOT_S_ and receives PROP named SPOTS (array of objects)
in <tbody>, the spots.map loops through spots array, to render TOPSPOT_ component
this passes name, description, and location as PROPS to TOPSPOT_ component
finally, export TOPSPOT_S_

import TopSpot from "./TopSpot";

const TopSpots = ({ spots }) => {
    return (

            <tbody>
                {spots.map((spot, index) => (
                    <TopSpot
                        key={index}
                        name={spot.name}
                        description={spot.description}
                        location={spot.location}
                    />
                ))}
            </tbody>  

    );
};


export default TopSpots;
*/