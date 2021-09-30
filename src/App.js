import './App.css';
import Signup from './Component/Signup';
import Nav from './Component/Nav';
import Login from './Component/Login';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Nav/>
      {/* <Signup/> */}
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
