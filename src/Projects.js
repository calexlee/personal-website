import React from 'react';
import './Content.css';
import { Card, Col, Row } from 'antd';
import { GithubOutlined, ChromeOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <Row gutter={16} align="middle">
                <Col span={8}>
                    <Card
                        style= {{ width: 400 }}
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
                </Col>
                <Col span={8}>
                    <Card
                        style= {{ width: 400 }}
                        cover={
                            <img
                                alt = "Grading4Canvas"
                                src = {require('./content/G4CSync.PNG')}
                                height="200"
                            />
                        }
                        actions = {[
                            <p> To be deployed fall 2020 </p>,
                        ]}
                    >
                        <Meta
                            title="Grading for Canvas"
                            description="A web application interfacing with Cornell's Canvas to provide better grading methods for professors"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style= {{ width: 400 }}
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
                </Col>
        
            </Row>
        </div>
    )
};

export default Projects;