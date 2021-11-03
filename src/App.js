import './App.css';
import Signup from './Component/Signup';
import Nav from './Component/Nav';
import Login from './Component/Login';
import Footer from './Component/Footer';
import StayDetail from './Component/StayDetail/StayDetail'
import Home from './Component/TopPage/Home'
import ReviewPost from './Component/ReviewPosts/ReviewPost'
import AreaDetail from './Component/AreaDetail/AreaDetail';

function App() {
  return (
    <div className="bgr">
      <Nav/>
      {/* <Signup/> */}
      {/* <Login/> */}
      <StayDetail/>
      {/* <ReviewPost/> */}
      {/* <AreaDetail/> */}
      <Footer/>
    </div>
  );
}

export default App;
