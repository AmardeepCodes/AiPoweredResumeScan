export default function AnalyseResume() {
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

          <div className="border-2 border-dashed border-gray-700 p-10 text-center rounded-xl hover:border-purple-500 transition cursor-pointer group">
            
            {/* Icon */}
            <div className="mb-4 text-3xl text-gray-500 group-hover:text-purple-400 transition">
              ⬆️
            </div>

            <p className="text-gray-300 font-medium">
              Drag & drop your resume
            </p>

            <p className="text-sm text-gray-500 mt-1">
              or click to browse (PDF, DOCX)
            </p>

            <button className="mt-5 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm">
              Browse Files
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Target Job Description</h3>
            <span className="text-xs text-gray-500">Step 2</span>
          </div>

          <textarea
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

        <button className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl 
        text-sm font-medium shadow-lg transition">
          Start Deep Analysis →
        </button>
      </div>

    </div>
  );
}