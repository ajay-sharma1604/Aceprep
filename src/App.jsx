import Test from "./components/Test"
import Main from "./components/Main"
import AIInput from "./components/AIMock/AIInput";
import Main from "./components/Main";
import Practice from "./components/Practice/Practice";
import Resource from "./components/Resources";
import SignUp from './components/SignUp'
import Login from './components/Login.jsx'
import Navbar from "./components/Main/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mock from "./components/Mock.jsx";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/ats" element={<AIInput />} />     
      </Routes>
    </Router>

  )


}

export default App


