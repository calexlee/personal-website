import React from 'react';
import './Content.css';
import { Card, Carousel} from 'antd';
import { GithubOutlined, ChromeOutlined } from '@ant-design/icons';

const { Meta } = Card;

const cardStyle = {
    width: 600,
}

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="projectTitle">Projects</h1>
            <Carousel className ="projectDisplay" draggable={true} autoplay={true} autoplaySpeed={7000}>
                <div className=  "card">
                    <Card
                        className = "projectCard"
                        style= {cardStyle}
                        cover={
                            <img
                                alt = "Settlers of Catan"
                                src = {require('./content/SoC.PNG')}
                                height="200"
                            />
                        }
                        actions = {[
                            <a href = "https://github.com/calexlee/settlers-of-catan">
                            <GithubOutlined key="SoC" style = {{fontSize: '36px'}} />
                            </a>,
                        ]}
                    >
                        <Meta
                            title="Settlers of Catan"
                            description="A fully implemented Settlers of Catan board game within the Ubuntu terminal"
                        />
                    </Card>
                </div>
                <div className=  "card">
                    <Card
                        className = "projectCard"
                        style= {cardStyle}
                        cover={
                            <img
                                alt = "Grading4Canvas"
                                src = {require('./content/G4CSync.PNG')}
                                height="200"
                            />
                        }
                        actions = {[
                            <a href = "https://github.com/maidul98/Canvas-Grading-Extension"> 
                                <GithubOutlined key="CGE" style = {{fontSize: '36px'}} />
                             </a>
                        ]}
                    >
                        <Meta
                            title="Grading for Canvas"
                            description="A web application interfacing with Cornell's Canvas to provide better grading methods for professors"
                        />
                    </Card>
                </div>
                <div className=  "card">
                    <Card
                        className = "projectCard"
                        style= {cardStyle}
                        cover={
                            <img
                                alt = "CodeNamesPlus"
                                src = {require('./content/codenames.PNG')}
                                height="200"
                            />
                        }
                        actions = {[
                            <a href = "https://codenames-plus.web.app/">
                            <ChromeOutlined key="codenames" style = {{fontSize: '36px'}} />
                            </a>,
                        ]}
                    >
                        <Meta
                            title="Codenames Plus"
                            description="An implementation of Codenames with realtime streaming on the web"
                        />
                    </Card>
                </div>
                <div className=  "card">
                    <Card
                        className = "projectCard"
                        style= {cardStyle}
                        cover={
                            <img
                                alt = "Asteroid Game Screenshot"
                                src = {require('./content/Asteroid_Game.png')}
                                height="200"
                            />
                        }
                        actions = {[
                            <a href = "https://github.com/calexlee/AsteroidGame">
                            <GithubOutlined key="asteroid" style = {{fontSize: '36px'}} />
                            </a>,
                        ]}
                    >
                        <Meta
                            title="Asteroid"
                            description="A small space game I made while self-learning Python3"
                        />
                    </Card>
                </div>
            </Carousel>
        </div>
    )
};

export default Projects;