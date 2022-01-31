import React from "react"
import photo from "./my_photo.jpg"
import './main.css'

export default function Main(){
    return(
        <div>
            <figure>
                <img src={photo} alt="My personal photo" className="my-photo" width="250" height="300"></img>
                <figcaption>Computer Science (BS) student at the University of North Carolina at Chapel Hill
                    (Class of 2024) </figcaption>
            </figure>
            <article className="about">
                <h2> About me </h2>
                <p>Hello! I am Pramit Thapa. I am a current undergraduate student pursuing a computer science
                   degree. Besides my own course work, I like to learn new programming languages and software tools to 
                   enhance my coding skills. The reason I first started to pursue a career in computer science is 
                   because as a kid, I was fascinated by new technologies. Whether it was playing games or browsing google 
                   to find answers to unusual questions, I enjoyed working specially with computers. Since then, I have been
                   curious as to how I can use computer science to solve real-life problems. So far, I have learned to code 
                   in Python, Java, C , HTML and Javascript. besides programming, my hobbies are playing soccer, video games
                   and reading books.</p>
                <h2>Projects</h2> 
                <p>coming soon...</p>
                <h2>Resume</h2>
                <p>Click <a href="https://docs.google.com/document/d/10ARVjj3wE4gS4KCW9tpa-SieTwblfdDK/edit" target="_blank" rel="noopener noreferrer"> here</a> to view my resume.</p> 
            </article>             
        </div>
    )
}