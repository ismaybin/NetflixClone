import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import Move from './Move';

const Row = ({title, fetchURL, RowId}) => {

    const [movies, setmovies] = useState([]);
    
    useEffect(() => {

        axios.get(fetchURL).then((response) => {
            setmovies(response.data.results)
        })
      
    }, [fetchURL])


    const slideleft = () => {
        var slider = document.getElementById('slider' + RowId);
        slider.scrollLeft = slider.scrollLeft -500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider' + RowId);
        slider.scrollLeft = slider.scrollLeft +500;
    };

    

  return (
    <>
            <h2 className=' text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className=' relative flex items-center group:'>
                <MdChevronLeft onClick={slideleft} className=' bg-white rounded-full left-0 absolute opacity-0 hover:opacity-100 cursor-pointer z-10  group-hover:block' size={40} />
                <div id={"slider" + RowId} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                {movies.map((items, id) => ( 
                    <Move key={id} items = {items} />
                 ))}

                </div>
                <MdChevronRight onClick={slideRight} className=' bg-white rounded-full right-0 absolute opacity-0 hover:opacity-100 cursor-pointer z-10  group-hover:block' size={40} />
            </div>
    </>
  )
}

export default Row
