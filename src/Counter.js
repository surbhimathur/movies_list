import './App.css';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import{useState} from "react";

export function Counter()
{
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const styles = { color: "red", fontSize: "18px" };
  const styles2 = { color: "blue", fontSize: "18px" };
    const incrementLike = () => setLike(like + 1);
    return(
        <div className="counter">
        
        <IconButton onClick={incrementLike} aria-label="like" color="error">
        <Badge badgeContent={like} color="primary">
        <i class='fas fa-thumbs-up' style={styles}></i>&nbsp;
        </Badge>
     </IconButton>
    
     <IconButton onClick={() => { setDislike(dislike + 1); }} aria-label="dislike" color="primary">
     <Badge badgeContent={dislike} color="error">
     <i class='fas fa-thumbs-down' style={styles2}></i>&nbsp;
     </Badge>
     </IconButton>
    
    
    </div>
    );
}