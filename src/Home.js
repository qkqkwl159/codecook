import React from 'react';
import './Home.css';
import Todo from './todoList/Todo';
import Project1 from './Pro1';
import Project2 from './Pro2';
import myimg from './my_profile.jpg';
import { Router } from 'react-router-dom';


function Home() {
    return (
        <div className='home'>
            <div className='home_container'>

                <div className='home_profile'>
                    <h1>MY_PROFILE__</h1>
                    <img
                    className="home_img"
                    src={myimg}
                    alt=''/>
                    <br></br>
                    <span className='profile_name'  >📌 Kim HuiJun</span>
                    <br></br>
                    <span className='profile_major'>💻 Major : Computer Engineering</span>
                    <br></br>
                    <span className="profile_introduce">
                        I am a student in computer engineering<br/>
                        I want to experience many things and make them.<br/>
                        I'll put the records here and Passion moves me<br/>
                    </span>
                </div>

                <div className='home_projects'>
                    <h1>PROJECTS__</h1>
                    <Project1/>
                    <Project2/>
                </div>
                <div className='home_Todo'>
                    <Todo/>
                </div>

            </div>
        </div>
    );
}

export default Home;
