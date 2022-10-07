import React from 'react';
import "./trainingComp.css";
import Pod from "../assests/pod.jpg";
import Moon from "../assests/moon.jpg"
import { Link } from 'react-router-dom';

const TrainingComp = () => {
  return (
    <div className="training-comp">
        <div className="left">
            <h1>Training</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo exercitationem aut voluptate tenetur libero rerum tempora, consequuntur a quos.</p>
            <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={Moon} alt=" moon" className='img'/>
            </div>
            <div className="img-stack bottom">
              <img src={Pod} alt=" pod" className='img'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TrainingComp