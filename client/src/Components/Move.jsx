import React, { useState} from 'react'
import { FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext';
import { db } from '../Firebase';
import {arrayUnion, doc, updateDoc} from 'firebase/firestore';

const Move = ({items}) => {

    const [like, setlike] = useState(false);
    const [saved, setsaved] = useState(false);
    const { user } = UserAuth();

    const movieId = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
      if(user?.email) {
        setlike(!like);
        setsaved(true);
        await updateDoc(movieId, {
          savedShows: arrayUnion({
            id: items.id,
            title: items.title,
            img: items.backdrop_path,
          }),
        });
      }else{
        alert('please login to save move');
      }
    };

  return (
    <div className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

    <img src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`} alt={items?.title} />

    <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        
        <p className=' whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{items?.title}</p>

        <p onClick={saveShow}>{like ? <FaHeart className=' absolute top-4 left-4 text-gray-400' /> : <FaRegHeart className=' absolute top-4 left-4 text-gray-400' />}</p>
    </div>
 </div>
  )
}

export default Move
