import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";

import AnalyseResume from "./pages/AnalyseResume";
import JobMatch from "./pages/JobMatch";
import Results from "./pages/Results";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
   <Routes>

  <Route path="/" element={<LandingPage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />

  <Route element={<DashboardLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/analyze" element={<AnalyseResume />} />
    <Route path="/job-match" element={<JobMatch />} />
    <Route path="/results" element={<Results />} />
  </Route>

</Routes>
  );
}