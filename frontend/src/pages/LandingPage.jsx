










export default function LandingPage() {
  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        <h1 className="font-semibold text-lg">JustCareer AI</h1>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span className="text-white">Dashboard</span>
          <span className="hover:text-white cursor-pointer">Analyze Resume</span>
          <span className="hover:text-white cursor-pointer">Job Match</span>
        </div>

        <div className="flex items-center gap-4">
          <span>🔔</span>
          <span>⚙️</span>
          <button className="px-4 py-1.5 bg-purple-600 rounded-lg text-sm">
            Upgrade
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <div className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-blue-900/40 text-blue-300">
          ● NEW: V2.0 ENGINE LIVE
        </div>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          AI Resume Analyzer <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            & Job Matcher
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Precision engineering for your professional trajectory. Upload your resume 
          and let our neural networks map your skills to global opportunities.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg">
            Upload Your Resume
          </button>

          <button className="px-6 py-3 bg-[#111827] border border-gray-700 rounded-xl">
            View Sample Analysis
          </button>
        </div>
      </section>

      {/* IMAGE / DASHBOARD PREVIEW */}
      <section className="px-8">
        <div className="max-w-5xl mx-auto rounded-2xl border border-gray-800 bg-gradient-to-b from-[#0b1220] to-[#020617] p-6 shadow-xl">

          <div className="rounded-xl overflow-hidden bg-black/40 p-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="dashboard"
              className="rounded-lg opacity-80"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-8">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">

          <div>
            <div className="mb-4 text-2xl">📄</div>
            <h3 className="font-semibold mb-2">Precision Resume Analysis</h3>
            <p className="text-gray-400 text-sm">
              Beyond keywords. Our AI understands hidden strengths and critical gaps.
            </p>
          </div>

          <div>
            <div className="mb-4 text-2xl">🎯</div>
            <h3 className="font-semibold mb-2">Semantic Job Matcher</h3>
            <p className="text-gray-400 text-sm">
              Match roles based on intent and trajectory—not just titles.
            </p>
          </div>

          <div>
            <div className="mb-4 text-2xl">📊</div>
            <h3 className="font-semibold mb-2">Predictive Career Pathing</h3>
            <p className="text-gray-400 text-sm">
              Identify skills needed to reach executive level faster.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#111827] to-[#1f2937] rounded-3xl p-12 border border-gray-800">

          <h2 className="text-3xl font-semibold mb-6">
            Ready to curate your future?
          </h2>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-purple-600 rounded-xl">
              Get Started Free
            </button>

            <button className="px-6 py-3 text-gray-300">
              Talk to an Advisor
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-xs pb-6">
        © 2026 JustCareer AI. All rights reserved.
      </footer>
    </div>
  );
}