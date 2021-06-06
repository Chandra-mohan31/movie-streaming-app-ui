import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import TestWeather from "../components/TestWeather";
import ThumbNails from "../components/ThumbNails";
import requests from "../utils/requests";



function index({results}) {
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
      {/* <Results  results={results} /> */}

      <div className="px-5 my-10 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <ThumbNails key={result.id} result={result} />
      ))}
    </div>      
      
       <div>
         <div  className="my-90 text-white" >
           <h1 my-90>test</h1>
         </div>
       </div>
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