import './App.css';

import { Link, Redirect, Route, Switch } from "react-router-dom";

import Button from '@mui/material/Button';
import { Movies } from './Movies';
import React from 'react';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

function App() {
  

    const initial_movies=[
    {
      name:"Coco",
      image:"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
      rating:8.4,
      summary:"The story follows a 12-year-old boy named Miguel who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family among the living and to reverse his family's ban on music."
    },
    {
      name:"Mary Kom",
      image:"https://upload.wikimedia.org/wikipedia/en/c/c8/MaryKomPoster.jpg",
      rating:6.8,
      summary:"Mary Kom is a 2014 Indian Hindi-language biographical sports film based on the life of the eponymous boxer Mary Kom, directed by Omung Kumar and produced by Viacom18 Motion Pictures and Sanjay Leela Bhansali.It depicts Kom's journey of becoming a boxer to her victory at the 2008 World Boxing Championships in Ningbo."
    },
    {
      name:"Uri: The Surgical Strike",
      image:"https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_FMjpg_UX1000_.jpg",
      rating:8.3,
      summary:"A fictionally dramatised account of the true events of the retaliation to the 2016 Uri attack, the film stars Vicky Kaushal, Paresh Rawal, Yami Gautam, Mohit Raina and Kirti Kulhari in pivotal roles, and tells the story of Major Vihaan Singh Shergill of the Para Special Forces, who played a leading role in the events."
    },
    {
      name:"Big Hero 6",
      image:"https://i.ytimg.com/vi/-AWpph_Rvoo/movieposter_en.jpg",
      rating:7.8,
      summary:"the film tells the story of Hiro Hamada, a young robotics prodigy, and Baymax, his late brother Tadashi's healthcare provider robot, who forms a superhero team to combat a masked villain who is responsible for Tadashi’s death."
    },
    {
      name:"Ratatouille",
      image:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating:8,
      summary:"The title refers to the French dish ratatouille, which is served at the end of the film, and also references the animal type of the main character, a rat. The plot follows the rat named Remy, who dreams of becoming a chef and tries to achieve his goal by forming an alliance with a Parisian restaurant's garbage boy."
    },
    {
      name:"Inception",
      image:"https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      rating:8.8,
      summary:"Inception is a 2010 science fiction action film.The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious."
    }
    ];

    const[movies,setMovies]= useState(initial_movies);
    
  return(
    <div className="App">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="add-movies">Add Movies</Link>
      <Link to="color-game">Color-Game</Link>
      </nav>
      <div className="main">
      <Switch>
      <Route exact path="/"><h1>Welcome to Movies world</h1></Route>
      <Route path="/films">
        <Redirect to="/movies" />
      </Route>
         <Route path="/movies">
         {movies.map((mn)=>
      
      <Movies name={mn.name} image={mn.image} rating={mn.rating} summary={mn.summary}/>
      
      )}
         </Route>

         <Route path="/add-movies">
         <AddMovie movies={movies} setMovies={setMovies} />
         </Route>

         <Route path="/color-game">
         <AddColor />
         </Route>

      <Route path="**"><NotFound/></Route>

      </Switch>
      </div> 
    </div>
  );
}

function NotFound()
{
  return(
    <div>
      <img src="http://partypropz.com/wp-content/uploads/2019/08/CodePen-404-Page.gif" alt="error"></img>
    </div>
  )
}
  function AddColor() {
   
    const [color,setColor]=useState("red");
    const styles={backgroundColor:color};
    //const colors=["teal","orange","yellow"];
    const [colors,setColors]=useState(["teal","orange","yellow"]);
    return(
      <div>
       <input style={styles} placeholder="enter a color name" value={color} onChange={(event)=>setColor(event.target.value)}></input>
       
       <Button onClick={()=>setColors([...colors,color])} variant="outlined">Add Color</Button>
       {colors.map((cl,index)=>
        <ColorBox key={index} color={cl}/>
         
       )}
      </div>
    );
  }

  function ColorBox({color}){
    const styles={backgroundColor:color,height:"25px",width:"250px",marginTop:"15px"};
    return<div style={styles}></div>
  }

  function AddMovie({movies,setMovies})
  {
    const[name,setName]=useState("");
    const[rating,setRating]=useState("");
    const[summary,setSummary]=useState("");
    const[image,setImage]=useState("");
   
    const addMovie=()=>{
  console.log(name,rating,image,summary);
  const newMovie={  
    name,
    rating,
    summary,
    image
  };
    console.log(newMovie);
  setMovies([...movies,newMovie]);
};

return(
  <div className="add_movie">
  <TextField id="standard-basic" label="Movie name" variant="standard" value={name} onChange={(event)=>setName(event.target.value)}/>
  <TextField id="standard-basic" label="Rating" variant="standard" value={rating} onChange={(event)=>setRating(event.target.value)}/>
  <TextField id="standard-basic" label="Summary" variant="standard" value={summary}  onChange={(event)=>setSummary(event.target.value)}/>
  <TextField id="standard-basic" label="Poster" variant="standard" value={image}  onChange={(event)=>setImage(event.target.value)}/>
     
  <Button onClick={addMovie} variant="outlined">Add Movie</Button>
  </div>

)
  };
  
export default App;
