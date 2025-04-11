import React from 'react';
import { Typography, Space } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinFilled } from '@ant-design/icons';
import './Content.css';

const { Title, Text } = Typography;

const Contact = () => {
    return (
        <div className="contact-container">
            <Title level={2} className="form-title">Get in Touch</Title>
            
            <div className="contact-intro">
                <Text className="intro-text">
                    I'm currently based in Redwood City, California. 
                    Feel free to reach out through any of the channels below. I'm always open to 
                    discussing new opportunities, collaborations, or just having a chat about tech!
                </Text>
            </div>

            <div className="contact-info">
                <Space direction="vertical" size="large">
                    <div className="info-item">
                        <MailOutlined className="info-icon" />
                        <a href="mailto:alee9903@gmail.com">
                            alee9903@gmail.com
                        </a>
                    </div>
                    
                    <div className="info-item">
                        <GithubOutlined className="info-icon" />
                        <a 
                            href="https://github.com/calexlee" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            github.com/calexlee
                        </a>
                    </div>
                    
                    <div className="info-item">
                        <LinkedinFilled className="info-icon" />
                        <a 
                            href="https://www.linkedin.com/in/clifford-lee-cornell/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/clifford-lee-cornell
                        </a>
                    </div>
                </Space>
            </div>
        </div>
    );
};

export default Contact;