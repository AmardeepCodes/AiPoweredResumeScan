



export default function Navbar() {
  return (
    <div className="h-16 px-6 flex items-center justify-between 
      bg-gradient-to-r from-[#020617] via-[#020617] to-[#0b1220] 
      border-b border-gray-800 backdrop-blur-md">

      {/* Left - Tabs */}
      <div className="flex items-center gap-8 text-sm">
        <button className="text-blue-400 font-medium">
          Overview
        </button>
        <button className="text-gray-400 hover:text-white transition">
          Reports
        </button>
        <button className="text-gray-400 hover:text-white transition">
          Insights
        </button>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="text-gray-400 hover:text-white transition">
          🔔
        </button>

        {/* Settings */}
        <button className="text-gray-400 hover:text-white transition">
          ⚙️
        </button>

        {/* Upgrade */}
        <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition">
          Upgrade
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center text-sm">
          A
        </div>

      </div>
    </div>
  );
}