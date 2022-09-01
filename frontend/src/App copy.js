
// import React from "react";
// import { useEffect,useState } from "react";
// import './App.css'
// import SearchIcon from './search.svg'
// import Movie from "./Movie";

// import { render } from "@testing-library/react"


// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=25f29436"

// const App = () => {


//   const [movies,setMovies] = useState([]);
//   const [searchTerm,setSearchTerm] = useState([]);

//   const serachMovies = async (title) =>{

//     const result = await fetch(`${API_URL}&s=${title}`);  
//     const data = await result.json();
//     setMovies(data.Search);


//   }

//   useEffect( () => {
  
//     serachMovies('Avengers')

//   },[])
  
//   return (
//     <div className="app">
//       <h1>Movie Lisr</h1>
      
//       <div className="search">
//         <input placeholder="search for movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//         <img src={SearchIcon} alt="search" onClick={ ()=> serachMovies(searchTerm) } />
//       </div>

//       {
//         movies?.length > 0
        
//         ?( <div className="container">
//             { movies.map((movie) => {
//                return  <Movie movie={movie} />         
//             })
//           } 
//           </div>
//         ) :(
//            <div className="empty">
//              <h2>No movie found</h2>
//              </div>
//         )
//       }
      
      
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useEffect,useState } from "react";
// import './App.css'
// import icon from './search.svg'
// import Movie from './Movie'

// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=25f29436"

// const App = () => {

  
//   const [movies,setMovies] = useState([]);
//   const [term,setTerm] = useState([]);

//   const serachMovies = async (title) => {
//         const result = await fetch(`${API_URL}&s=${title}`) 
//         const data = await result.json()
//         console.log(data)
//         setMovies(data.Search)
//   }
  
//   useEffect(() => {
 
//      serachMovies('superman')
     
//   },[])
  
  
  
//   return(

//     // <div className="app">
//     //   <h1>Movie Land{movies.length}</h1>
//     //   <div className="search">
       
//     //    <input value={term} onChange={(e) => setTerm(e.target.value)} />
//     //    <img src={icon} alt="search" onClick={() => serachMovies(term)} />

//     //   </div>

 
//     //   {movies.length > 0 ?
//     //   (<div className="container">
//     //      {movies.map((movie) => (
//     //        <Movie movie={movie}/>
//     //      ))
//     //      }
//     //   </div>)
//     //   :
//     //   (
//     //     <div className="empty">
//     //       <h1>no record</h1>
//     //     </div>
//     //   )
//     //   }

//     // </div>
     
// <div>
//     <h1>I am a level one heading</h1>

//     <h2>lovely</h2>
//     <p>This is a paragraph of text. In the text is a <span className="spn"> span element</span>
// and also a <a href="#">link</a>.</p>

//     <p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

//     <a href="#">link with out P</a>
//     <ul>
//         <li>Item <span>one</span></li>
//         <li className="special">Item two</li>
//         <li>Item <em>three</em></li>
//     </ul>
//     <p>Woww  i am inside</p>
//     <h2>lovely bottom</h2>

//     <div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>

//     <div class="box-r"></div>


//     <p>
//   Let's use:
//   <span>Cascading</span>
//   <span>Style</span>
//   <span>Sheets</span>
// </p>

//     </div>     

// )

// }

// export default App;




