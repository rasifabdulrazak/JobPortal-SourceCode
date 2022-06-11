import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/User/Register/Register";
import AboutUs from "./pages/User/AboutUs/AboutUs";
import Jobs from "./pages/User/Jobs/Jobs";
import Home from "./pages/User/Home/Home";
import LoginForm from "./pages/User/Login/Login";
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
import PostedJobs from "./pages/Hr/PostedJobs";
import HrDetail from "./pages/Admin/HrDetail";
import PrePlans from "./pages/Admin/PrePlans";
import Plans from "./pages/User/Plans/Plans";
import UserListing from "./pages/Hr/UserListing";
import ClientDetailPage from "./pages/Hr/ClientDetailPage";
import PaymentPage from "./pages/User/PaymentPage/PaymentPage";
import { useEffect } from "react";
import { io } from "socket.io-client";
import {CHAT_SERVER} from './utils/urls'
import {connectSocketIO} from './Redux/Actions/SocketAction'
import ChatScreen from "./pages/Hr/ChatScreen";
import UserChatScreen from "./pages/User/UserChatScreen";
import PremiumCustomerPage from "./pages/Admin/PremiumCustomerPage";
import { allMessage, addMessages } from "./Redux/Actions/SocketAction";


function App() {
  const userId = useSelector((state) => state.userId);
  const socketIO = useSelector((state) => state.socketIO);
  const allMessages = useSelector((state)=>state.messages)

  console.log(socketIO, "=========================");

  
  
  
  const dispatch = useDispatch()
  useEffect(()=>{
    
    if(!socketIO && userId){
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^ !socketIO && userId ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6");
      const socket = io("http://localhost:8080");
      console.log(socket)
      dispatch(connectSocketIO(socket))

      socket && socket.emit('set_online', { username: userId.userId });

      socket && socket.on('pass_message', (data) => {
        console.log("================= chat receiver ===========");
        dispatch(addMessages(data))
        console.log(data);
        console.log("================= chat receiver ===========");
     
        // dispatch(chatsNegotiationStatus(JSON.parse(data.message)))
      })

    }

    // socketIO.disconnect();
    
    
     
    
  },[userId])

  


  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Routes>
            <Route element={<Register />} path="/user_register" />
            <Route element={<AboutUs />} path="/about_us" />
            <Route element={<Plans />} path="/companies" />
            <Route element={<Jobs />} path="/jobs" />
            <Route element={<Home />} path="/" />
            <Route element={<LoginForm />} path="/login" />
            <Route element={<UserProfile />} path="/user_profile" />
            <Route element={<Recruiter />} path="/hr_recruiters" />
            <Route element={<JobDetailPage />} path="/job_details/:id" />
            <Route element={<HrHome />} path="/hr_home" />
            <Route element={<SavedJobs />} path="/user_saved_jobs" />
            <Route element={<AppliedJobs />} path="/user_applied_jobs" />
            <Route element={<HrRegister />} path="/hr_registration" />
            <Route element={<UserManager />} path="/user_management" />
            <Route element={<UserDetail />} path="/user_details/:id/" />
            <Route element={<HrDetail />} path="/hr_details/:id/" />
            <Route element={<HrManager />} path="/hr_management" />
            <Route element={<JobPosting />} path="/post_job" />
            <Route element={<PostedJobs />} path="/posted_job" />
            <Route element={<PrePlans />} path="/premium_plans" />
            <Route element={<UserListing />} path="/user_listing" />
            <Route element={<ClientDetailPage />} path="/client_details/:id/" />
            <Route element={<PaymentPage />} path="/payment_details/:id/" />
            <Route element={<ChatScreen />} path="/message/" />
            <Route element = {<UserChatScreen />} path='/user_chat/' />
            <Route element = {<PremiumCustomerPage />} path='/premium_customers/' />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
