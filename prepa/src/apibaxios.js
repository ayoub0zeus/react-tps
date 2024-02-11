// import React, { useState, useEffect } from 'react'
// import axios from 'axios';

// function Apibaxios() {
//     const [info,setInfo]=useState([]);
//     useEffect(()=>{
//         axios
//         .get('https://jsonplaceholder.typicode.com/todos')
//         .then(res=>{setInfo(res.data)})


//         // fetch('https://jsonplaceholder.typicode.com/todos')
//         // .then((response) => response.json())
//         // .then((data) => setInfo(data))
//         // .catch((error) => console.error('Error fetching data:', error));  
//     }     
//         ,[])
//   return (
//     <>
//         <h1>Api data</h1>
//         {info.map((el,index)=>(<ul key={index}>
//             <li><b>title :</b> {el.title}  ,  <b>user id :</b> {el.userId}</li>
            
//         </ul>))}
//     </>
//   )
// }

// export default Apibaxios;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Apibaxios() {
  const [info, setInfo] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setInfo(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = () => {
    const results = info.filter(el =>
      el.title.toLowerCase() === searchTitle.toLowerCase()
    );

    setSearchResults(results);
  };

  return (
    <>
      <h1>Api data</h1>
      <div>
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="Enter title to search"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          {searchResults.map((result, index) => (
            <ul key={index}>
              <li><b>Title:</b> {result.title}</li>
              <li><b>User ID:</b> {result.userId}</li>
            </ul>
          ))}
        </div>
      ) : (
        <p>No matching title found.</p>
      )}



      
      <h2>All Data:</h2>
      {info.map((el, index) => (
        <ul key={index}>
          <li><b>Title:</b> {el.title} , <b>User ID:</b> {el.userId}</li>
        </ul>
      ))}
    </>
  );
}

export default Apibaxios;