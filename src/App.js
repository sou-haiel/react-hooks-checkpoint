import './App.css';
import React from 'react';
import {v4 as uuidv4} from 'uuid'
import Movielist from './Components/Movielist.js'

import {useState, useEffect} from 'react'

function App() {

  const[movies,setMovies] = useState([
    {
      
      id :uuidv4(),
      name:"      Inception     ",
      image:"https://i.egycdn.com/pic/WmFwZndlY212bVlITmJFY21UVEV4Y052Y05F.jpg",
      rating :8,
      year:"2010",
    },
    {
      id :uuidv4(),
      name:"The Godfather",
      image:"https://i.egycdn.com/pic/WmFwZndlY21FbUVtcGJtdnZjRWNtRW1Id2xtYmxtamE.jpg",
      rating :9,
      year:"1972",
    },
    {
      id :uuidv4(),
      name:"The Gardener",
      image:"https://iegybest.co:2096/wp-content/uploads/2021/12/The-Gardener.jpg",
      rating :4,
      year:"2021",
    },
    {
      id :uuidv4(),
      name:" The Lost City of Z ",
      image:"https://iegybest.co:2096/wp-content/uploads/2018/04/The-Lost-City-of-Z.jpg",
      rating :6,
      year:"2016",
    },
    {
      id :uuidv4(),
      name:"France ",
      image:"https://iegybest.co:2096/wp-content/uploads/2021/12/France.jpg",
      rating :5,
      year:"2021",
    },
    {
      id :uuidv4(),
      name:"Bali ",
      image:"https://iegybest.co:2096/wp-content/uploads/2021/12/Bali.jpg",
      rating :4,
      year:"2021",
    },
    ]);

    const [movie, setMovie] = useState({
      name: "",
      image: "",
      rating: "",
      year: "",
    });

  const[searchTerm,setsearchTerm]=useState('')
  const [rate, setRate] = useState(1)
  
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
    
      const handlonchange = (e)=>{
        setsearchTerm(e.target.value);
      }
 
  return (
   
    <div className="App">
    <h1 className='head'> Movie app</h1>
  
    <div className='search_movies'>
    <input className='search' type='text' placeholder="search..." onChange={handlonchange}/> 
    </div>

    <Movielist movies={movies.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/>

    <div className="add_Movies">
    <input type="text" placeholder="name" name="name"  onChange={ handleChange}></input>
    <input type="text" placeholder="rating" name="rating" onChange={ handleChange}></input>
    <input type="text" placeholder="year" name="year" onChange={ handleChange}></input>
    <input type="file"  placeholder="image" name="image" onChange={ handleChange} ></input>

    <button type="submit" onClick={handleSubmit}>Add</button>
   </div> 
    
  </div>
);
}
      
  
  
  

export default App;
