import React, { useState } from 'react';
import './App.less';
import './Content.css'
import { Layout, Menu } from 'antd';
import { HomeOutlined, ProjectOutlined, ContactsOutlined, ClockCircleOutlined, LinkedinFilled } from '@ant-design/icons';
import Home from './Home.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

const {Header, Footer, Content } = Layout;

const App = () => {
  const [loc, setLoc] = useState("home");

  const handleClick = e => {
    setLoc(e.key);
  };

  const renderContent = () => {
    switch (loc) {
      case "home":
        return <Home />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout className="App">
      <Header className="header">
        <Menu className="topNav" onClick={handleClick} selectedKeys={[loc]} mode="horizontal" theme="light">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="experience" icon={<ClockCircleOutlined />}>
            Experience
          </Menu.Item>
          <Menu.Item key="projects" icon={<ProjectOutlined />}>
            Projects
          </Menu.Item>
          <Menu.Item key="contact" icon={<ContactsOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        {renderContent()}
      </Content>
      <Footer className="footer">
        Created by Clifford Alexander Lee
        <a href="https://www.linkedin.com/in/clifford-lee-cornell/" target="_blank" rel="noopener noreferrer">
          <LinkedinFilled className="footIcon" />
        </a>
      </Footer>
    </Layout>
  );
};

export default App;
