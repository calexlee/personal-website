import React from 'react';
import { Card, Typography, Space, Tag } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import './Content.css';

const { Title, Text } = Typography;

const Projects = () => {
    const projects = [
        {
            title: "Personal Website",
            description: "A modern, responsive personal website built with React. Features a clean, professional design with smooth animations and transitions.",
            technologies: ["React", "CSS", "JavaScript"],
            github: "https://github.com/calexlee/personal-website",
            demo: "https://calexlee.com/"
        },
        {
            title: "Liminal Spirit",
            description: "A mobile game built with OpenGL and C++. Won 2nd place in the 2022 Cornell Game Design Showcase.",
            technologies: ["OpenGL", "C++", "Game Design"],
        },
    ];

    return (
        <div className="content-container">
            <Title level={2} className="section-title">
                Featured Projects
            </Title>
            
            <div className="card-container">
                {projects.map((project, index) => (
                    <Card 
                        key={index}
                        className="project-card"
                        hoverable
                    >
                        <div className="card-header">
                            <Title level={3} className="card-title">
                                {project.title}
                            </Title>
                            <Space wrap className="tech-tags">
                                {project.technologies.map((tech, i) => (
                                    <Tag key={i} color="blue">{tech}</Tag>
                                ))}
                            </Space>
                        </div>
                        
                        <Text className="card-description">
                            {project.description}
                        </Text>
                        
                        <div className="card-links">
                            <Space>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <GithubOutlined className="link-icon" />
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <LinkOutlined className="link-icon" />
                                    </a>
                                )}
                            </Space>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;