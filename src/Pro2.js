import React, {useState} from 'react';
import './Pro2.css'
import netImg1 from './net_project1.png'
import netImg2 from './net_project2.png'
import netImg3 from './net_project3.png'
import netImg4 from './net_project4.png'
import netImg5 from './net_project5.png'

function Pro2(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='container'>
        <br></br>
       <button name="bb" onClick={toggleMenu}
       >
          2_ WebData Caraling , Provided NETFLIX TOP10
       </button>

       {isOpen && (
        <div className='folding-menu'>
        <h1>⌨ Codes and Img ⌨️</h1>
        <br></br>
        <br></br>
        <h4>- project structure</h4>
        <br></br>
        <img 
        src={netImg1}
        alt=''/>
        <br></br>
        <br></br>
        <h4>- DB table struct</h4>
        <br></br>
        <img 
        src={netImg2}
        alt=''/>
        <br></br>
        <br></br>
        <br></br>
        <img 
        src={netImg3}
        alt=''/>
        <br></br>
        <br></br>
        <h4>- project webdata Crawling</h4>
        <br></br>
        <img 
        src={netImg4}
        alt=''/>
        <br></br>
        <br></br>
        </div>
       )}
        </div>
    );
}

export default Pro2;