import './App.css';

function App() {
  

    const movie_names=[
    {
      mname:"Coco",
      image:"https://i1.wp.com/growingupbilingual.com/wp-content/uploads/2017/09/Coco59b807c1a7720-1.jpg?fit=675%2C1000&ssl=1",
      rating:8.4,
      summary:"The story follows a 12-year-old boy named Miguel who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family among the living and to reverse his family's ban on music."
    },
    {
      mname:"Mary Kom",
      image:"https://upload.wikimedia.org/wikipedia/en/c/c8/MaryKomPoster.jpg",
      rating:6.8,
      summary:"Mary Kom is a 2014 Indian Hindi-language biographical sports film based on the life of the eponymous boxer Mary Kom, directed by Omung Kumar and produced by Viacom18 Motion Pictures and Sanjay Leela Bhansali.It depicts Kom's journey of becoming a boxer to her victory at the 2008 World Boxing Championships in Ningbo."
    },
    {
      mname:"Uri: The Surgical Strike",
      image:"https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_FMjpg_UX1000_.jpg",
      rating:8.3,
      summary:"A fictionally dramatised account of the true events of the retaliation to the 2016 Uri attack, the film stars Vicky Kaushal, Paresh Rawal, Yami Gautam, Mohit Raina and Kirti Kulhari in pivotal roles, and tells the story of Major Vihaan Singh Shergill of the Para Special Forces, who played a leading role in the events."
    },
    {
      mname:"Big Hero 6",
      image:"https://i.ytimg.com/vi/-AWpph_Rvoo/movieposter_en.jpg",
      rating:7.8,
      summary:"the film tells the story of Hiro Hamada, a young robotics prodigy, and Baymax, his late brother Tadashi's healthcare provider robot, who forms a superhero team to combat a masked villain who is responsible for Tadashi’s death."
    },
    {
      mname:"Ratatouille",
      image:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating:8,
      summary:"The title refers to the French dish ratatouille, which is served at the end of the film, and also references the animal type of the main character, a rat. The plot follows the rat named Remy, who dreams of becoming a chef and tries to achieve his goal by forming an alliance with a Parisian restaurant's garbage boy."
    },
    {
      mname:"Inception",
      image:"https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      rating:8.8,
      summary:"Inception is a 2010 science fiction action film.The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious."
    }
    ];
  return(
    <div className="App">
    <h1>Movies List</h1>
      {movie_names.map((mn)=>
      
      <Movies name={mn.mname} image={mn.image} rating={mn.rating} summary={mn.summary}/>
      
      )}
    </div>
  );
}


function Movies({name,image,rating,summary}){
 return(
   <div className="container">
   <div className="image_box"><img src={image} className="poster"></img></div>
      <div className="movie_details">
      <h2>{name}</h2> 
      <p className="description">{summary}</p>
      <p className="rating">IMDB: {rating}/10</p>
      </div>     
   </div>
 );
}

export default App;
