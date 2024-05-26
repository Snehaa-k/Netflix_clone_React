import React, { useState } from 'react'
import { IoMdPlay } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useEffect } from 'react'
import axios from '../../Axios'
import {API_KEY,imageUrl} from '../../constants/Constant'
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[1])
    })
  }, []);

  return (
    <div style={{backgroundImage:`url(${movie ?  imageUrl+movie.backdrop_path :""})`}} className='banner' >
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: ""}</h1>
            <div className='banner_buttons'>
                <button className='button' ><IoMdPlay/> Play</button>
                <button className='button'><FaPlus/>  My List</button>

            </div>
            <h1 className='description'>{movie? movie.overview:""}</h1>

        </div>
        <div className="fade_bottom">
              
        </div>

    </div>
  )
}

export default Banner