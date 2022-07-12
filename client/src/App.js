import Home  from './pages/home/home';
import Single  from './pages/single/single.jsx';
import Topbar from './components/topbar/topbar.jsx';
import Write from './pages/write/write.jsx';
import Settings from './pages/settings/settings.jsx';
import About from './pages/about/about.jsx';
import Login from './pages/login/login.jsx';
import  Register from './pages/register/register.jsx';
import  Contact from './pages/contact/contact.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

export default function App() {
  const user = true;
  return (
    <Router>
    <Topbar />
      <Routes>
        <Route path='/blog_redu' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element=
        {user ? <Home /> : <Register />} />
        <Route path='/login' element=
        {user ? <Home /> : <Login /> } />
        <Route path='/write' element=
        {user ? <Write /> : <Register />} />
        <Route path='/settings' element={
        user ? <Settings /> : <Register /> } />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </Router>
  );
}