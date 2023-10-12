import React, {useState} from 'react';
import './Pro1.css'
import bb_structure from './bb_project1.png';
import bb_relPaper from './bb_project2.png';
import bb_logo from './bb_project3.png';
import bb_demoImg1 from './bb_project4.png';
import bb_demoImg2 from './bb_project5.png';
import Codes from './Pro1_codes'

function Pro1(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='container'>
             <h5> Title Click! </h5> 
             <br></br>
            <button name="bb" onClick={toggleMenu}
            >
               1_ Sleep recognizeing System
            </button>
            {isOpen && (
                <div className='folding-menu'>
                    <Codes/>
                    <br></br>
                    <br></br>
                    <h1>Project imgs</h1>
                    <br></br>
                    <h4>- project structure</h4>
                    <br></br>
                     <img 
                    src={bb_structure}
                    alt=''/>
                    <br></br>
                    <br></br>
                    <h4>- reference papers</h4>
                    <br></br>
                    <img
                    src={bb_relPaper}
                    alt=''/>
                    <br></br>
                    <br></br>
                    <h4>- project logo</h4>
                    <br></br>
                    <img
                    src={bb_logo}
                    alt=''/>
                    <br></br>
                    <br></br>
                    <h4>- demo img</h4>
                    <br></br>
                    <img
                    src={bb_demoImg1}
                    alt=''/>
                    <br></br>
                    <br></br>
                    <img
                    src={bb_demoImg2}
                    alt=''/>
                    </div>
            )}
        <br></br>
            
                
            
        </div>
    );
}

export default Pro1;