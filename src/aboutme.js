import React, { useState } from 'react';
import SocialMedia from './socialmedialogos';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import Header from './header';

function Aboutme(){
    const [aboutmediv, setAbout] = useState(false);
    const changeAbout = () =>{
        //console.log(window.scrollY);
        if(window.scrollY == 300){
            setAbout(true);
        }else{
            setAbout(false);
        }
    };

    //for checking scroll working 
    window.addEventListener('scroll', changeAbout);

    return( 
        <div>
        <div id="aboutme" className={aboutmediv ? 'about-me-div': 'about-me-div-active'}>
            <div className="about-me-content" >
                {/* <h1>About me (she/her)</h1> */}
                {/* <h2>Bachelor of science in Information Technology Major 3d animation and mobile development</h2> */}
                {/* <h6>Hi, I’m Jas nice to see you here! I’m an aspirant web developer or a front-end designer! I’m also interested with a bit of backend. Currently I’ve been practicing and developing personal projects for my own growth. It excites me whenever I got to make things into reality. 
                </h6> */}

              
                        <div className="child1">
                            <img src={require('./img/myimage.JPG')} />
                        </div>
                        <div className="child2">
                            <p className='intro-title'>- ABOUT ME (SHE/HER)</p>
                            <p className='hello-banner'>“Build your own reality”</p>
                            <p className='title-description'>Hi! I’m a recent graduate in Bachelor of Science in Information Technology Major in 3D Animation and Mobile Development passionate with designing and developing websites.</p>
                            <a className='what-ido-button'><Link to="/coding">what i do</Link><i className="fa fa-chevron-right"></i></a>
                        </div>  

            </div>
        </div>
        <SocialMedia/>
        </div>
        );
    };
    
export default Aboutme;
    