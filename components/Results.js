// import ThumbNails from "./ThumbNails";
// function Results({results}) {
//     return (
//         <div className="px-5 mt-100 my-10 sm:grid md:grid-cols-2">
//            {
//                results.map((result)=>{
//                   return(
//                       <ThumbNails result={result} key={result.id} />
//                   )
//                })
//            }
//         </div>
//     )
// }

// export default Results
import FlipMove from "react-flip-move";
// import Thumbnail from "./Thumbnail";
import ThumbNails from "./ThumbNails";

function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <ThumbNails key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
