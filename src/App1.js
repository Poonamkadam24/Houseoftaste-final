import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
}  from "react-router-dom";
import Header from './Component1/Header/Header';
import Home from './Component1/Section/Home';
import Services from './Component1/Section/Services';
import About from './Component1/Section/About';
import Footer from './Component1/Footer/Footer';
import Login from './Component1/Login/login';
import Signup from './Component1/Login/Signup';
import App from './App';
function App1() {
  
    return (
      <><Routes>
    <Route exact path='/header'
    element={<Header/>}/>
     
    <Route exact path='/home'
    element={<Home/>}/>

    <Route exact path='/login'
    element={<Login/>}/>
    <Route exact path='/signup'
    element={<Signup/>}/>
    <Route exact path='/itemdata'
     element={<App/>}/>
    </Routes>
   <Header/>  
   <Home/>
   <Services/>
   <About/>
   <Footer/> 
    </>   
    );
  };

export default App1;
