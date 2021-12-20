import { Counter } from "./Counter";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";

export function Movies({ name, image, rating, summary }) {
  const [show, setShow] = useState(true);

  const summaryStyles = { display: show ? "block" : "none" };
  const style3 = { color: rating < 8 ? "crimson" : "green" };

  return (
    
    <div className="container">
      <div className="image_box">
        <img src={image} className="poster" alt="images"></img>
      </div>
      <div className="movie_details">
        <h2>{name}</h2>
        <IconButton aria-label="show" onClick={() => setShow(!show)} color="primary">
         {show ? <ExpandLessIcon />:<ExpandMoreIcon/>}
        </IconButton>
        <p className="rating" style={style3}>
       {rating} <IconButton color="success"><StarIcon />
        </IconButton>
        </p>

        <p className="description" style={summaryStyles}>
          {summary}
        </p>
        
        <Counter />
      </div>
    </div>
    
  );
}
