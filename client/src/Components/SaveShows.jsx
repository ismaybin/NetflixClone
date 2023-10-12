import React, {useState, useEffect} from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../Firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {AiOutlineClose } from 'react-icons/ai'



const SaveShows = () => {

   const [movies, setmovies] = useState([])

   const {user} = UserAuth()


  const slideleft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft -500;
};

const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft +500;

};


const movieRef = doc(db, 'users', `${user?.email}`);
const deleteShow = async (passId) => {
  try{
    const result = movies.filter((item) => item.id !== passId);
    await updateDoc(movieRef, {
      savedShows: result,
    });
  }catch(error){
    console.log(error);
  }
};


useEffect(() => {

  onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
    setmovies(doc.data()?.savedShows)
  })

},[doc?.email])

  
  return (
    <>
       <h2 className=' text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className=' relative flex items-center group:'>
                <MdChevronLeft onClick={slideleft} className=' bg-white rounded-full left-0 absolute opacity-0 hover:opacity-100 cursor-pointer z-10  group-hover:block' size={40} />
                <div id={"slider"} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                {movies?.map((items, id) => ( 
                    <div key={id} className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

                    <img src={`https://image.tmdb.org/t/p/w500/${items?.img}`} alt={items?.title} />
                
                    <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        
                        <p className=' whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{items?.title}</p>
                        <p onClick={() => deleteShow(items.id)} className=' absolute text-gray-300 top-4 right-4'>< AiOutlineClose /></p>
                
                        
                    </div>
                 </div>
                 ))}

                </div>
                <MdChevronRight onClick={slideRight} className=' bg-white rounded-full right-0 absolute opacity-0 hover:opacity-100 cursor-pointer z-10  group-hover:block' size={40} />
            </div>
    </>
  )
}

export default SaveShows
