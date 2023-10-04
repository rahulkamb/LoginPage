import React from "react"
import youtubeImg from '../Pictures/youtube.png'
import './Home.css';
import {AiOutlineMenu} from 'react-icons/ai'



export default function Home(){
    return(
        <nav className="sidebar">
            <header className="div-header">
                <div className="image-text">                    
                    <span className="image">
                        <button className="nav-button" ><AiOutlineMenu className="div-menu"/></button>
                        <img src={youtubeImg} alt="Youtube-logo" className="image-youtube"/>                        
                    </span>
                </div>            
                
            </header>
        </nav>
    )
}