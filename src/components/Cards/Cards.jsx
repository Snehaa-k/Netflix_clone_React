import React, { useEffect, useId, useState } from 'react'
import './Cards.css'
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../../constants/Constant';
import Youtube from 'react-youtube'

const Cards = (props) => {
  const [useusrl,setUrl] = useState()
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
    
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!=0){
            setUrl(response.data.results[0])
      }
      else{
        console.log("nothing")
      }
    })
     
  }
  return (
    
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
          <img onClick = {()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster": "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
)}

        </div>
      { useusrl && <Youtube videoId={useusrl.key} opts={opts}/>}


    </div>

  )
}

export default Cards