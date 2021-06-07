import { ThumbUpIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import TestWeather from "../components/TestWeather";
import ThumbNails from "../components/ThumbNails";
import requests from "../utils/requests";
import FlipMove from "react-flip-move";




function index({results}) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  // console.log('====================================');
  // console.log(props);
  // console.log('====================================');
  return (
    <div  >
    <Head>
      <title>Streaming app</title>
      
    </Head>
      
      <Header />
      <Nav />
      {/* px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center */}
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">

     {
       results.map((result)=>(
         <div key={result.key} className="group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50">
         <img src={
                `${base_url}${result.backdrop_path || result.poster_path}` || `${base_url}${result.poster_path}`
            } className="h-auto w-auto object-contain" />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type} .`}{" "}
                {result.release_date || result.first_air_date} . {" "}
                <ThumbUpIcon className="h-5 mx-2" height={25} />{result.vote_count}
                </p>
            </div>
         </div>
       ))
     }    
     </div>
     {/* <div class="grid grid-cols-1 md:grid-cols-6 text-white">
     <h1>hey there</h1>
       <h1>hey there</h1>

       <h1>hey there</h1>
       <h1>hey there</h1>
</div>

     <div className="grid grid-cols-2 gap-4">
       <h1>hey there</h1>
       <h1>hey there</h1>

       <h1>hey there</h1>
       <h1>hey there</h1>

     </div>
       <div>
         <div  className="my-90 text-white" >
           <h1 my-90>test</h1>
         </div>
       </div> */}
    </div>
  )
}

export default index






export async function getServerSideProps(context){
    const genre = context.query.genre;

    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests?.fetchTrending.url}`)
                            .then(res => res.json());

    return{
      props:{
        results: request.results,
      }
    }

}