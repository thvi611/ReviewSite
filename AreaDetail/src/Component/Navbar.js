import React ,{Component} from 'react';
class Navbar extends Component {
    render(){
      return (
        <nav>     
    <div id='parent-with-flex-direction-row'>
        <div id='logo'>
          LOGO
        </div>
        <div class='child'>
          <a href='#'>Block1</a>
        </div>
        <div class='child'>
          <a href='#'>Block2</a>
        </div>
        <div class='child'>
        <a href='#'>Block3</a>
        </div>
        <div id='account'>
        <a href='#'>Account</a>
        </div>     
    </div>
    </nav>);
  }
};

export default Navbar;