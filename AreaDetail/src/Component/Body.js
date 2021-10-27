import React, {Component} from 'react';
class Body extends Component {
    render(){
        return(
        <div>
            <div>
                <div className='part'>
                    <div className='placename'>
                    エリア名
                    </div>
                    <div className='partchild'>
                    <a href='#'>All Reviews</a>
                    </div>
                    
                        <div class="dropdown">
                            <button class="dropbtn">Dropdown▼</button>
                            <div class="dropdown-content">
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </div>
                        </div>
                </div> 

                <div className='area'>              
                    <div className='child2'>
                    エリア写真
                    </div>
                    <div className='child2'>
                    エリア情報
                    </div>
                </div> 

                <div className='toparea'>
                このエリアのトップ
                </div>

               
               
                
                
            </div>        
        );
        </div>
       
            );
        }
}
 
export default Body