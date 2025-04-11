import React from 'react';
import { Card, Typography, Space } from 'antd';
import { ClockCircleOutlined, CodeOutlined, CloudOutlined } from '@ant-design/icons';
import './Content.css';

const { Title, Text } = Typography;

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Meta",
            date: "2022 - 2024",
            description: "Worked on two teams within Meta's AI Infrastructure team. Built solutions for handling AI Assets, and worked on the model serving platform to implement privacy features.",
            icon: <CodeOutlined />
        },
        {
            title: "Software Engineer Intern",
            company: "Facebook",
            date: "Fall 2021",
            description: "Worked on Portal AI implementing computer vision models for hand detection and tracking, and also worked on the Portal Camera to improving face cropping.",
            icon: <CodeOutlined />
        },
        {
            title: "Software Engineer Intern",
            company: "Microsoft",
            date: "Summer 2021",
            description: "Worked on the Azure AI Cloud Capacity team to build ML models to predict cloud capacity needs.",
            icon: <CloudOutlined />
        },
    ];

    return (
        <div className="content-container">
            <Title level={2} className="section-title">
                Professional Experience
            </Title>
            
            <div className="card-container">
                {experiences.map((exp, index) => (
                    <Card 
                        key={index}
                        className="experience-card"
                        hoverable
                    >
                        <div className="card-header">
                            <div className="job-title">
                                <Title level={3} className="card-title">
                                    {exp.title}
                                </Title>
                                <Text strong className="company-name">
                                    {exp.company}
                                </Text>
                            </div>
                            <Text type="secondary" className="experience-date">
                                <ClockCircleOutlined /> {exp.date}
                            </Text>
                        </div>
                        
                        <Text className="card-description">
                            {exp.description}
                        </Text>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Experience;