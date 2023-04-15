import React from 'react';
import "./hero.css";
import { GiRoundStar } from 'react-icons/gi';
// import productbanner from "../src/assets/productbanner.png";


const Hero = () => {
  return (
    <section className="hero_container">
        <div className="first_section">
            <div className="card_icon">
                <div className="card"></div>
            </div>
            <div className="card_writeup">
                <h1>Spiderman Miles Morales</h1>

                <p className="publish">Published April 23, 2023</p>

                <p className="price">N 5000</p>

                <div className="rating">
                    <GiRoundStar />
                    <p>5.0 rating</p>
                </div>

                <div className="review">
                    <p>Miles returns to the magical world of under land, 
                        only to find the hatter in a horrible state. 
                        With the help of his friends, Miles must travel 
                        through time to save the mad hatter and the under 
                        lands fate from the evil clutches of the red queen 
                        and a clock like creature called time. </p>
                </div>

                <div className="two_buttons">
                    <a href="#hero" class="button">Download</a>
                    <a href="#hero" class="buttonn">Preview</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero