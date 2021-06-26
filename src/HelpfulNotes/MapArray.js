import React from 'react';

//With the map method we can wrap the names and display them in a nicer fashion
//**KEEP IN MIN MAP RETURNS A NEW ARRAY**

//1. Set a new var for the names
//2. Map through the list(names) with the parameter name
//3. Return an HTML element wrapping the mapped value
//4. Display the newNames in the main component

const names = ['Angel', 'Brendan', 'Jawns']

const newNames = names.map((name)=> {
  return <h1> {name} </h1>
})

function MapArray() {
  return (
    <div className="App">
      {newNames}
    </div>
  );
}

export default MapArray;