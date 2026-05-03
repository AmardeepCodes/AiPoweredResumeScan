import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  
  const {state} = useLocation();
  const navigate = useNavigate();

  if(!state){
    return (
      <div className="text-white p-10">
        <p>No Data found</p>
         <button onClick={()=>navigate("/")}>Go Back</button>
      </div>
    )
  }


   return (
    <div className="text-white p-10">

      <h1 className="text-2xl font-semibold mb-6">Analysis Result</h1>

      <p className="mb-4">
        Match Score:{" "}
        <span className="text-purple-400 text-xl">
          {state.matchScore}%
        </span>
      </p>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Missing Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {state.missingKeywords?.map((k, i) => (
            <span key={i} className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">
              {k}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Suggestions</h3>
        <ul className="list-disc ml-5 text-gray-300">
          {state.suggestions?.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

    </div>
     );
}

export default Results
