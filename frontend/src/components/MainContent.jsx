



export default function Main() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Precision Engineering for your Career
      </h1>
      <p className="text-gray-400 mb-6">
        Upload your credentials and provide target context
      </p>

      <div className="grid grid-cols-2 gap-6">

        {/* Upload Card */}
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-700">
          <h3 className="mb-4">Step 1: Document Upload</h3>

          <div className="border-2 border-dashed border-gray-600 p-10 text-center rounded-lg">
            <p>Drop your resume here</p>
            <button className="mt-3 px-4 py-2 bg-gray-700 rounded">
              Browse Files
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-700">
          <h3 className="mb-4">Step 2: Target Context</h3>

          <textarea
            placeholder="Paste job description..."
            className="w-full h-40 bg-[#0b1220] border border-gray-700 p-3 rounded"
          />
        </div>
      </div>

      <button className="mt-8 px-6 py-3 bg-purple-600 rounded-lg">
        Start Deep Analysis
      </button>
    </div>
  );
}