import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/contants';
import { cacheResults } from '../utils/searchSlice';




const Head = () => {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); 

  const searchCache = useSelector(store => store.search);
 

  useEffect(() => {
  const timer = setTimeout(() => {
    if(searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions()
    }
    }, 200);
   return () => {
      clearTimeout(timer);
   };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({ 
      [searchQuery]: json[1] }));

  }

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg' >
      <div className='flex col-span-1 items-center'>
        <img
        onClick={() => toggleMenuHandler()}
        className='h-8 cursor-pointer' 
        alt="menu"
        src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png'
        />
        <a href='/'>
        <img
        className='h-20 w-20 mx-2' 
        alt="youtube-logo"
        src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png'
        />
        </a>
    </div>
    
    <div className="col-span-10 px-10 justify-center items-center ">
      <div>
      <input 
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setShowSuggestions(false)}
      className='w-1/2 border border-gray-400 px-5 p-2 rounded-l-full' type="text"/>
      <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100' >🔍</button>
      </div>
      { showSuggestions && ( <div className='fixed bg-white p-2 px-2 w-[34rem] shadow-lg rounded-lg border-gray-100'>
        <ul>
          {suggestions.map((s) => (<li key={s}  className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>))}

        </ul>
      </div>)}
      <div />
      </div>


    <div className='col-span-1'>
      <img
      className='h-8' 
      alt="user"
        src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
        />
    </div>
    </div>
    
  );
};

export default Head;
