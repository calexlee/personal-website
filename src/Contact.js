import React from 'react';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import './Content.css';

const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <div className = "me"></div>
            <p className="contactInfo">I currently live in Hopedale, Massachusetts and go to Cornell University in Ithaca, New York. The most reliable method
                of contact via my email, but LinkedIn works as well. Feel free to check out my Github and  
                thank you for taking the time to visit my site!
            </p>
            <a href="mailto:cal368@cornell.edu">
                <MailOutlined className = "contentIcon" style = {{fontSize: '128px', color: 'white'}}/>
            </a>
            <a href = "https://www.linkedin.com/in/clifford-lee-cornell/">
                <LinkedinOutlined className = "contentIcon" style = {{fontSize: '128px', color: 'white'}}/>
            </a>
            <a href = "https://github.coecis.cornell.edu/cal368">
                <GithubOutlined className = "contentIcon" style = {{fontSize: '128px', color: 'white'}}/>
            </a>
        </div>
    )
};

export default Contact;