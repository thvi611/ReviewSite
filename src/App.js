import './App.css';
import Signup from './Component/Signup';
import Nav from './Component/Nav';
import Login from './Component/Login';
import Footer from './Component/Footer';
import ServiceDetail from './Component/ServiceDetail/ServiceDetail'
import Home from './Component/TopPage/Home'

function App() {
  return (
    <div>
      <Nav/>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <ServiceDetail/> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
