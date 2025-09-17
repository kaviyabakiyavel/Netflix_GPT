import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieresult } from '../utils/gptSlice'
import {getGPTResponse} from "../utils/openaiClient"

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();


  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json()
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names of 5 movies, comma separated. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;
    const gptResponse = await getGPTResponse(gptQuery);
    console.log("gptResponse",gptResponse)
    if (!gptResponse) return; // Handle error
    const gptMovies = gptResponse.split(",").map((m) => m.trim());
    const tmdbResults = await Promise.all(gptMovies.map(searchMovieTMDB));
    dispatch(addGptMovieresult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form className=" bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;