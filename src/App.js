import React, { useState }  from 'react';
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
    console.log('clicked ', e.key);
    setLoc(e.key);
  }

  const iconStyle = {
    fontSize: '18px',
  }
  let content;
  if (loc === "home"){
    content = <Home/>;
  } else if (loc === "experience"){
    content = <Experience/>;
  } else if (loc === "projects"){
    content = <Projects/>;
  } else if (loc === "contact"){
    content = <Contact/>;
  } else {
    content = <div> content not displaying properly</div>;
  }

  return (
  <div className="App">
    <Layout style={{height:"100vh"}}> 
      <Header> 
        <Menu className = "topNav" onClick={handleClick} selectedKeys={[loc]} mode = "horizontal">
        <Menu.Item key = "home" icon = {<HomeOutlined style = {iconStyle}/>}>
          Home  
        </Menu.Item>
        <Menu.Item key = "experience" icon = {<ClockCircleOutlined style = {iconStyle}/>}>
          Experience
        </Menu.Item>
        <Menu.Item key = "projects" icon = {<ProjectOutlined style = {iconStyle}/>}>
          Projects
        </Menu.Item>
        <Menu.Item key = "contact" icon = {<ContactsOutlined style = {iconStyle}/>}>
          Contact
        </Menu.Item>
        </Menu>  
      </Header>
      <Content className = {loc}> 
        {content}
      </Content>
      <Footer>
        Created by Clifford Alexander Lee
        <a href = "https://www.linkedin.com/in/clifford-lee-cornell/">
        <LinkedinFilled className = "footIcon" style = {{fontSize: '24px'}}/>  
        </a>
      </Footer>
    </Layout>
  </div>
)};

export default App;
