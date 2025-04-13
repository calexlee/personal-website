import React from 'react';
import { Card, Typography, Space, Tag } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import './Content.css';

const { Title, Text } = Typography;

const Projects = () => {
    const projects = [
        {
            title: "ReRe",
            description: "A browser-based, AI-driven narrative RPG where the player is trapped in a time loop that resets on death. Each loop gives them more knowledge, dialogue options, and clues about how to survive until the next day.",
            technologies: ["Python", "TypeScript", "Firebase", "OpenAI", "Prompt Engineering"],
            github: "https://github.com/calexlee/rere",
        },
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
        {
            title: "What the Flock!",
            description: "A Java application game where you play as a chef trying to cook a chicken before being eaten by one.",
            technologies: ["Java", "LibGDX", "Game Design"],
        },
        {
            title: "CodeNamesPlus",
            description: "A web application, based on the Codenames board game, in which multiple people can play together in the same room(s).",
            technologies: ["React", "Firebase", "JavaScript"],
        },
        {
            title: "Grading for Canvas",
            description: "A web application that integrates with the Cornell Canvas System to allow professors to grade students on assignments and see results in a more intuitive way.",
            technologies: ["React", "ExpressJS", "Canvas API"],
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
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <GithubOutlined className="link-icon" />
                                    </a>
                                )}
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