import './App.css';
import "swiper/css/bundle";
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import TVshows from './components/TVshows/TVshows';
import Peple from './components/People/Peple';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import { Routes,Route, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import TVDetails from './components/tvdetails/TVDetails';

function App() {
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      getEncodedData()
    }
    // getEncodedData()
}, []);
// useEffect(() => {
//   setUserData();
// }, [userData])
function ProtectedRoute(props){
  if(localStorage.getItem('token') == null){
    return <Navigate to='/login'/>
  }
  else{
    return props.children;
  }
}
function logOut(){
  localStorage.removeItem('token');
  setUserData(null)
   navigate('/login')
}
  function getEncodedData(){
    let decodedToken = localStorage.getItem('token');
    let encodedData = jwtDecode(decodedToken);
    setUserData(encodedData);
    console.log(encodedData);
  }
  return (
    <>
    <Navbar userData={userData} logOut={logOut}/>
    <div className="container">
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path='movies' element={<ProtectedRoute><Movies/></ProtectedRoute>}></Route>
        <Route path='tvshows' element={<ProtectedRoute><TVshows/></ProtectedRoute>}></Route>
        <Route path='people' element={<ProtectedRoute><Peple/></ProtectedRoute>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='details' element={<Details/>}></Route>
        <Route path='tvdetails' element={<TVDetails/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login getEncodedData={getEncodedData}/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
