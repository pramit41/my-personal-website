import React from "react"
import photo from "./my_photo.jpg"
import './main.css'

export default function Main(){
    return(
        <div>
            <figure>
                <img src={photo} alt="My personal photo" className="my-photo" width="250" height="300"></img>
                <figcaption>Computer Science (BS) student at the University of North Carolina at Chapel Hill </figcaption>
            </figure>
            <article className="about">
                <h2> About me </h2>
                <p>Text about me</p>
            </article>             
        </div>
    )
}