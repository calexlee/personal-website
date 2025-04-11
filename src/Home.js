import React from 'react';
import { Typography, Space, Avatar } from 'antd';
import { GithubOutlined, LinkedinFilled, MailOutlined } from '@ant-design/icons';
import './Content.css';

const { Title, Text } = Typography;

const Home = () => {
    return (
        <div className="home-container">
            <Space direction="vertical" size="large" align="center">
                <Avatar 
                    size={200} 
                    src={require('./content/me.jpg')}
                    className="profile-avatar"
                />
                
                <div className="name-title">
                    <Title level={1} className="home-title">
                        Clifford <span className="nick">Alex</span>ander Lee
                    </Title>
                    <Text type="secondary" className="subtitle">
                        Software Engineer & Computer Science Graduate
                    </Text>
                </div>

                <div className="social-links">
                    <a href="https://github.com/calexlee" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/clifford-lee-cornell/" target="_blank" rel="noopener noreferrer">
                        <LinkedinFilled className="social-icon" />
                    </a>
                    <a href="mailto:alee9903@gmail.com">
                        <MailOutlined className="social-icon" />
                    </a>
                </div>

                <div className="about-section">
                    <Title level={2}>About Me</Title>
                    <Text className="about-text">
                        I'm a passionate software engineer with expertise in full-stack development, 
                        machine learning, and AI Infrastructure. I graduated from Cornell University with 
                        a degree in Computer Science and have experience working at Microsoft and Meta.
                    </Text>
                </div>
            </Space>
        </div>
    );
};

export default Home;