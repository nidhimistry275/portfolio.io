import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StarsBackground from "./components/StarsBackground";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ExpCont from "./components/ExpCont";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={15}
        outerSize={50}
        innerScale={2}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#1f36a1",
        }}
      />
      <div>
        <StarsBackground />
        <Navbar />
        <HomeBanner id="home" />

        <ProjectCard
          id="project"
          projectTitle="Placemento: Manage College Placements"
          projectDesc="Placemento connects job seekers and companies by matching resumes with job postings, making hiring easy. Both sides get smart recommendations to find the best fit. This application is built on the Php, MySQL, and JavaScript"
          projectLink="https://github.com/nidhimistry275/Placemento"
          deployedProjectLink="https://github.com/nidhimistry275/Placemento"
          projectImg={require("./images/projectjob.png")}
        />
        <ProjectCard
          className="odd"
          projectTitle="ShowHub: Ticket to Movie Experience"
          projectDesc="ShowHub is a full-stack web application developed as a part of a project, allowing users to search, book, and manage movie tickets seamlessly. This application is built on the MERN stack (MongoDB, Express.js, React.js, Node.js).
"
          projectLink="https://github.com/nidhimistry275/showhub"
          deployedProjectLink="https://github.com/nidhimistry275/showhub"
          projectImg={require("./images/projectmovie.png")}
        />
        <ProjectCard
          className="even"
          projectTitle="Central Banking Database System"
          projectDesc="The Central Banking Database System is designed to centralize banking operations by managing bank details, ATM data, customer profiles, accounts, transactions, and card information. Built on Microsoft SQL Server, it ensures structured and efficient data handling for the banking industry."
          projectLink="https://github.com/nidhimistry275/Central_Banking_Database_System"
          deployedProjectLink="https://github.com/nidhimistry275/Central_Banking_Database_System"
          projectImg={require("./images/projectbankdb.png")}
        />
        <ProjectCard
          className="odd"
          projectTitle="Netflix Clone"
          projectDesc="A Netflix-inspired movie streaming app featuring real-time data from the TMDb API, allowing users to browse, search, and watch movies effortlessly. Built with React.js and Firebase, it offers a sleek UI, secure authentication, and a fully responsive design."
          projectLink="https://github.com/nidhimistry275/netflix"
          deployedProjectLink="https://github.com/nidhimistry275/netflix "
          projectImg={require("./images/projectnetflix.png")}
        />
        <AboutMe id="about" />
        <ExpCont id="exp" />
        <SkillCard id="skills" />
        <Footer />
      </div>
    </>
  );
}

export default App;
