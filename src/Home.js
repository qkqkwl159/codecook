import React from 'react';
import './Home.css';
import myimg from './my_profile.jpg';




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
                    <div className='profile_name'>Kim HuiJun</div>
                    <br></br>
                    <span className='profile_major'>💻 Major : Computer Engineering</span>
                    <br></br>
                    <div className="profile_introduce">
                        I am a third year student in computer engineering<br/>
                        I want to experience many things and make them.<br/>
                        I'll put the records here and Passion moves me<br/>
                    </div>
                </div>

                <div className='home_todo'>
                    <h1>TO_DO__</h1>
                </div>
                <div className='home_projects'>
                    <h1>PROJECTS__</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;