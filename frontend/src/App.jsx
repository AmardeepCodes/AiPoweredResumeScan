import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";

// import Dashboard from "./pages/Dashboard";
import AnalyseResume from "./pages/AnalyseResume";
import JobMatch from "./pages/JobMatch";
import Results from "./pages/Results";

export default function App() {
  return (
  
      <Routes>

        <Route path="/" element={<DashboardLayout />}>
           
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="analyze" element={<AnalyseResume />} />
          <Route path="job-match" element={<JobMatch />} />
          <Route path="results" element={<Results />} />
        </Route>

      </Routes>
    
  );
}
