import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Register from './pages/User/Register/Register';
import AboutUs from './pages/User/AboutUs/AboutUs';
import Companies from './pages/User/Companies/Companies';
import Jobs from './pages/User/Jobs/Jobs';
import Home from './pages/User/Home/Home';
import LoginForm from './pages/User/Login/Login';
import UserProfile from "./pages/User/UserProfile/UserProfile";
import Recruiter from "./pages/User/Recruiters/Recruiter";
import JobDetailPage from "./pages/User/JobDetailPage/JobDetailPage";
import HrHome from "./pages/Hr/HrHome";
import SavedJobs from "./pages/User/SavedJobs/SavedJobs";
import AppliedJobs from "./pages/User/AppliedJobs/AppliedJobs";
import HrRegister from "./pages/Hr/HrRegister";
import AdminHome from "./pages/Admin/AdminHome";
import UserManager from "./pages/Admin/UserManager";
import UserDetail from "./pages/Admin/UserDetail";
import HrManager from "./pages/Admin/HrManager";
import { useDispatch, useSelector } from "react-redux";
import JobPosting from "./pages/Hr/JobPosting";



function App() {

  const userId = useSelector((state) => state.userId);


  return (
  
  <>

    <Router>
    <div className="flex flex-col min-h-screen overflow-hidden">
    
      <Routes>
      <Route element={<Register />} path="/user_register" />
      <Route element={<AboutUs />} path="/about_us" />
      <Route element={<Companies />} path="/companies" />
      <Route element={<Jobs />} path="/jobs" />
      <Route element={<Home />} path="/" />
      <Route element={<LoginForm />} path="/login" />
      <Route element={<UserProfile />} path="/user_profile" />
      <Route element={<Recruiter />} path="/hr_recruiters" />
      <Route element={<JobDetailPage /> } path="/job_details"/>
      <Route element={<HrHome /> } path="/hr_home"/>
      <Route element={<SavedJobs />} path ="/user_saved_jobs" />
      <Route element={<AppliedJobs />} path ="/user_applied_jobs" />
      <Route element={<HrRegister />} path="/hr_registration" />
      <Route element={<UserManager />} path="/user_management" />
      <Route element={<UserDetail />} path="/user_details" />
      <Route element={<HrManager />} path="/hr_management" />
      <Route element={<JobPosting />} path="/post_job" />

      </Routes>
      </div>
    </Router>

  </>
  );
}

export default App;
