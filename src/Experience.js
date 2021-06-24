import React from 'react';
import './Content.css';
import { YoutubeOutlined } from '@ant-design/icons'

const Experience = () => {
    return (
        <div className="experience">
            <h1>Current and Upcoming Jobs</h1>
            <div className="exp">
            <div className = "jobTitle">
                    <h2 className="floatLeft"> Software Engineering Intern at Microsoft</h2>
                    <h3>May 2021 - Present</h3>
            </div>
            <hr className = "bTitle"/>
            <p className = "jobInfo">
            Working within Azure Capacity Infrastructure Services to produce a machine learning model using AzureML and Databricks to predict the time various buildout tasks take to complete.
            </p>
            </div>
            <div className="exp">
            <div className = "jobTitle">
                    <h2 className="floatLeft"> Software Engineering Intern at Facebook</h2>
                    <h3>Starting August 2021</h3>
            </div>
            <hr className = "bTitle"/>
            <p className = "jobInfo">
                Working with a team based in Menlo Park, California. More info soon!
            </p>
            </div>
            <h1>Past Experience</h1>
            <div className = "exp">
            <div className="jobTitle">
                <h2 className="floatLeft">MATLAB Student Ambassador</h2>
                <h3>September 2019 - June 2021</h3>
            </div>
            <hr className="bTitle"/>
            <p className="jobInfo">
                Working for Mathworks as the sole student ambassador for Cornell University. Responsibilities include planning and 
                holding educational events for undergraduate and graduate students using MATLAB and Simulink; use social media to spread
                relevant educational information; and produce educational videos for the official Mathworks Youtube (my first video can
                be found via the link below).
            </p>
            <a href="https://youtu.be/4MRXkC7HjzY">
            <YoutubeOutlined style = {{fontSize: "64px"}}/>
            </a>
            </div>
            <div className = "exp">
            <div className="jobTitle">
                <h2 className="floatLeft">CS Consultant for CS 1112 & CS 1132</h2>
                <h3>January 2019 - December 2020</h3>
            </div>
            <hr className="bTitle"/>
            <p className="jobInfo">
                Working as a teaching assistant for Introduction to Computing using MATLAB. Responsibilities include holding office
                hours and one-on-one sessions with students to help them with assignments/concepts from the class; assisting in 
                discussion/lab sessions; and performing grading on various assignments and exams.
            </p>
            </div>
        </div>
    )
};

export default Experience;