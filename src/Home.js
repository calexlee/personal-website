import React from 'react';
import './Content.css';

const Home = () => {
    return (
        <div>
            <div className = "nameTitle">
            <h2 className = "homeTitle">Clifford <span className = "nick">Alex</span>ander Lee</h2>
            <hr className="hTitle"/>
            <img className = "animated hidSun" src = {require('./content/SunGlasses.png')} alt = "Sunglasses" height = "100"/>
            </div>

            <div className = "Cornell Line">
            <h2 className = "CS">Computer Science Student @ <span className = "animated Cornell">Cornell</span></h2>
            <img className = "animated hidCorn" src = {require('./content/cornell_seal_simple_black.svg')} alt = "Cornell Logo" height = "100"/>
            </div>

            <div className = "MathWorksLine">
            <h2 className = "SA"><span className = "animated MATLAB">MATLAB</span> Student Ambassador</h2>
            <img className = "animated hidMAT" src = {require('./content/L-Membrane_RGB_R.png')} alt = "MathWorks L-shaped Membrane" height = "100"/>
            </div>
        </div>
    )
};

export default Home;