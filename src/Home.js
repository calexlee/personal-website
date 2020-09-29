import React from 'react';
import './Content.css';

const Home = () => {
    return (
        <div>
            <h2 className = "homeTitle">Clifford <span className = "nick">Alex</span>ander Lee</h2>
            <hr className="hTitle"/>
            <h2 className = "CS">Computer Science Student @ <span className = "Cornell">Cornell</span></h2>
            <h2 className = "SA"><span className = "MATLAB">MATLAB</span> Student Ambassador</h2>
        </div>
    )
};

export default Home;