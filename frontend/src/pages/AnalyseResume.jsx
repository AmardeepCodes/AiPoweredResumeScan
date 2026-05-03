import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";



export default function AnalyseResume() {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);


  const handleAnalysis = async () => {
    if(!file || !jd) {
      alert("Upload resume and enter job description first!")
      return;
    }
  

  try {
    setLoading(true);

    // 1. Upload file to backend and get extracted text
    // 2. Send extracted text + JD to backend for analysis
    // 3. Display results

    const formData = new FormData(); // any other way ? ans: Yes, you can use a different approach, but FormData is commonly used for file uploads. tell me other way to upload file to backend without using formdata tell now -> You can convert the file to a Base64 string and send it in the request body. Here's how you can do it:
    
    formData.append("resume", file);
    formData.append("jd",jd);

    const response = await API.post("/analyse", formData)

    const data = response.json();
    setResult(data);
    navigate("/result", {state: data});


  } catch (error) {
    console.error("Analysis failed: ", error);
  }

}

  return (
    <div className="text-white">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">
          Resume Analysis
        </h1>
        <p className="text-gray-400">
          Upload your resume and provide a target job description to get precise AI insights.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Upload Section */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Upload Resume</h3>
            <span className="text-xs text-gray-500">Step 1</span>
          </div>

          {/* Upload Area */}

          <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="fileUpload"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <label htmlFor="fileUpload" className="block cursor-pointer">
              <div className="border-2 border-dashed border-gray-700 p-10 text-center rounded-xl hover:border-purple-500 transition group">
                
                <div className="mb-4 text-3xl text-gray-500 group-hover:text-purple-400 transition">
                  ⬆️
                </div>

                <p className="text-gray-300 font-medium">
                  {file ? file.name : "Drag & drop your resume"}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  or click to browse (PDF, DOCX)
                </p>

                <button
                  type="button"
                  className="mt-5 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
                >
                  Browse Files
                </button>
              </div>
            </label>

        </div>

        {/* Job Description */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Target Job Description</h3>
            <span className="text-xs text-gray-500">Step 2</span>
          </div>

         <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full h-52 bg-[#0b1220] border border-gray-700 p-4 rounded-xl 
            focus:outline-none focus:ring-2 focus:ring-purple-500 
            text-gray-300 placeholder-gray-500 resize-none transition"
          />

        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-10 flex items-center justify-between bg-[#111827] border border-gray-800 rounded-xl px-6 py-4">

        <p className="text-sm text-gray-400">
          Analysis typically takes a few seconds.
        </p>

      <button
        onClick={handleAnalysis}
        disabled={loading}
         className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl 
          text-sm font-medium shadow-lg transition"
      >
       {loading ? "Analyzing...": "Start Deep Analysis "}
      </button>
      </div>

    </div>
  );
}