import React from 'react';
import "../css/home.css";
import ImageTextComponent from '../../components/js/ImageTextComponent';
import profileImage from "../../images/profile.jpg";
import projectImage1 from "../../images/projects1.jpg";
import projectImage2 from "../../images/projects2.jpg";
import projectImage3 from "../../images/projects3.jpg";
import blogImage from "../../images/blog.jpg";
import collaborationImage from "../../images/collaboration.jpg";
import CenteredTextComponent from '../../components/js/CenteredTextComponent';

const Home = () => {
    return (
        <div>
            <CenteredTextComponent headerLevel={1} headerText="Welcome!">
            Welcome to my website! As a seasoned Software Engineer, I'm dedicated to crafting cutting-edge digital solutions that are both innovative and user-friendly. Whether you're here to explore my portfolio, delve into my skill set, or to simply connect, I'm thrilled to have you. Thank you for visiting, and I look forward to the opportunity to collaborate!           
            </CenteredTextComponent>
            <CenteredTextComponent headerLevel={2} headerText="Benjamin Orr | Software Engineer">
            As a member of the telecommunications team at UPMC Health Plan, I've tackled a wide variety of software problems, from integrating Cloud Based Applications into the Genesys Framework, building Secure File Transfer Protocols between our on-premises servers, to supporting our end users in our Contact Centers.          
            </CenteredTextComponent>
            <ImageTextComponent imageSrcs={[profileImage]} altText="Profile">
            By supporting the Genesys Framework, I've honed my expertise in web development, mastering HTML, CSS, and JavaScript. My competencies include adept troubleshooting, tailored customization, and seamless optimization for enhanced website functionality. This journey reflects my adaptability, problem-solving prowess, and collaborative spirit within framework environments, enriching my overall web development acumen.            
            </ImageTextComponent>
            <ImageTextComponent imageSrcs={[projectImage1, projectImage2, projectImage3]} altText="Projects" reverse>
            I attended Penn State, earning my Bachelor's degree in Archaeological Science, which instilled in me meticulous research, critical analysis, and interdisciplinary thinking. Transitioning to tech via Academy PGH honed my problem-solving, adaptability, and collaboration skills in a fast-paced environment. This unique blend bridges historical inquiry with cutting-edge technology, enriching my approach to innovation and problem-solving. While at Penn State, I served in the PA Army National Guard as an infantryman, fostering discipline and leadership. This experience instilled in me a strong work ethic, resilience, and adaptability, qualities that have served me well in my professional journey.
            <hr></hr><br />
            In this journey I've immersed myself in diverse projects, enhancing my skills and broadening my horizons. I've played pivotal roles in digital endeavors across UPMC Health Plan and its affiliates. These experiences have sharpened my expertise in web development and user experience design. Moreover, I've actively engaged in yearly game jams, fostering creativity and teamwork, and delving into various aspects of game development, design, and project management.            </ImageTextComponent>
            <ImageTextComponent imageSrcs={[blogImage]} altText="Blog" >
            Beyond work, I'm deeply engaged in diverse pursuits that invigorate my life. As an active member of a HEMA club, I immerse myself in the art of fencing, drawing inspiration from historical European martial arts. Additionally, I indulge my passion for creativity designing video games, exploring endless possibilities in digital worlds. Away from screens and swords, I find solace in the great outdoors, pursuing the ancient tradition of hunting. And when I'm not crafting game narratives or tracking prey, I enjoy the art of cooking, delighting my wife Christina with culinary creations that reflect my love and appreciation for her.            </ImageTextComponent>
            <ImageTextComponent imageSrcs={[collaborationImage]} altText="Collaborations" reverse> 
            This is Moki, our handsome gray tabby. Moki enriches our lives with his gentle purrs and affectionate nature. His playful antics bring joy to each day, a loyal companion who offers comfort and companionship. Moki's presence fills our home with warmth and love, making every moment brighter.
            </ImageTextComponent>
        </div>
    );
};
export default Home;