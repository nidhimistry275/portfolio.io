import React, { useState, useEffect } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StarsBackground from "./components/StarsBackground";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import AnimatedCursor from "react-animated-cursor";
import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

const trackVisitors = async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    const userIP = data.ip;

    const viewsRef = doc(db, "siteStats", "views");
    const viewsSnap = await getDoc(viewsRef);

    if (viewsSnap.exists()) {
      await updateDoc(viewsRef, { count: viewsSnap.data().count + 1 });
    } else {
      await setDoc(viewsRef, { count: 1 });
    }

    const ipCollectionRef = collection(db, "visitorIPs");
    await addDoc(ipCollectionRef, {
      ip: userIP,
      timestamp: new Date(),
    });

    console.log("Visitor IP logged:", userIP);
  } catch (error) {
    console.error("Error tracking visitor:", error);
  }
};
const getSortedVisitorIPs = async () => {
  try {
    const ipCollectionRef = collection(db, "visitorIPs");
    const q = query(ipCollectionRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    const visitorData = querySnapshot.docs.map((doc) => doc.data());
    console.log("Sorted Visitor IPs:", visitorData);
  } catch (error) {
    console.error("Error fetching sorted visitor IPs:", error);
  }
};

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    !isMobile && (
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
    )
  );
};

function App() {
  useEffect(() => {
    trackVisitors();
    getSortedVisitorIPs();
  }, []);

  return (
    <>
      <CustomCursor />
      <div>
        <StarsBackground />
        <Navbar />
        <HomeBanner id="home" />
        <div id="project">
          <h2 className="section-title">Projects</h2>
          <ProjectCard
            projectTitle="Placemento: Manage College Placements"
            projectDesc="Placemento connects job seekers and companies by matching resumes with job postings, making hiring easy. Both sides get smart recommendations to find the best fit. This application is built on the Php, MySQL, and JavaScript"
            projectLink="https://github.com/nidhimistry275/Placemento"
            deployedProjectLink="https://github.com/nidhimistry275/Placemento"
            projectImg={require("./images/projectjob.png")}
          />
          <ProjectCard
            className="odd"
            projectTitle="ShowHub: Ticket to Movie Experience"
            projectDesc="ShowHub is a full-stack web application developed as a part of a project, allowing users to search, book, and manage movie tickets seamlessly. This application is built on the MERN stack (MongoDB, Express.js, React.js, Node.js)."
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
            deployedProjectLink="https://github.com/nidhimistry275/netflix"
            projectImg={require("./images/projectnetflix.png")}
          />
        </div>
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <Footer />
      </div>
    </>
  );
}

export default App;
