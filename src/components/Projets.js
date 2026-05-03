import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjeectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/yumhub1.png";
import projImg2 from "../assets/img/yumhub2.png";
import projImg3 from "../assets/img/yumhub3.png";
import projImg4 from "../assets/img/yumhub4.png";
import projImg5 from "../assets/img/yumhub5.png";
import projImg6 from "../assets/img/Medical.png";
import projImg7 from "../assets/img/Pika.png";
import projImg8 from "../assets/img/WEP1.png";
import projImg9 from "../assets/img/WEP2.png";
import projImg10 from "../assets/img/WEP3.png";
import projImg11 from "../assets/img/WEP4.png";
import projImg12 from "../assets/img/FMD1.png";
import projImg13 from "../assets/img/FMD2.png";
import projImg14 from "../assets/img/FMD3.png";
import projImg15 from "../assets/img/FMD4.png";
import projImg16 from "../assets/img/FMD5.png";

export const Projects = () => {

  const liveProject = [
    {
      title: "Medical Service Website",
      description: "Frontend design",
      imageUrl: projImg6,
      projectUrl: "https://capable-parfait-b31267.netlify.app/",
    },
     {
      title: "Drope Pika ",
      description: "Frontend homepage design",
      imageUrl: projImg7,
      projectUrl: "https://dapper-pika-5873c3.netlify.app/",
    },
   
  ];

    const frontend = [
    {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg4,
      projectUrl: "#",
    },

      {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg1,
      projectUrl: "#",
    },
      {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg2,
      projectUrl: "#",
    },
      {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg3,
      projectUrl: "#",
    },
      {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg4,
      projectUrl: "#",
    },
      {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg5,
      projectUrl: "#",
    },

]

  
  const phythonprojects = [
    {
      title: "Pattern Recognition 1",
      description: "Weather Prediction using Machine Learning",
      imageUrl: projImg8,
      projectUrl: "https://colab.research.google.com/drive/1EBa7XOgIEMvqQpm1gmRtvJGgo9V_C23r#scrollTo=oHbxXROcXrPf",
    },
    {
      title: "Pattern Recognition 2",
      description: "Weather Prediction using Machine Learning",
      imageUrl: projImg9,
      projectUrl: "#",
    },
     {
      title: "Pattern Recognition 3",
      description: "Weather Prediction using Machine Learning",
      imageUrl: projImg10,
      projectUrl: "#",
    },
    {
      title: "Pattern Recognition 4",
      description: "Face Mask Detection using Machine Learning",
      imageUrl: projImg11,
      projectUrl: "#",
    },
     {
      title: "Artificial Intelligence Neural Network",
      description: "Face Mask Detection using Machine Learning",
      imageUrl: projImg12,
      projectUrl: "https://github.com/abubinnaser81/face-mask-detection-naser",
    },
     {
      title: "Artificial Intelligence Neural Network 2",
      description: "Face Mask Detection using Machine Learning",
      imageUrl: projImg13,
      projectUrl: "#",
    },
     {
      title: "Artificial Intelligence Neural Network 3",
      description: "Face Mask Detection using Machine Learning",
      imageUrl: projImg14,
      projectUrl: "#",
    },
     {
      title: "Artificial Intelligence  4",
      description: "Face Mask Detection using Machine Learning",
      imageUrl: projImg15,
      projectUrl: "#",
    },
     {
      title: "Artificial Intelligence 5",
      description: "Face Mask Detection using Machine Learning",
      imageUrl: projImg16,
      projectUrl: "#",
    },
  ];


//   const allProjects = [...liveProject, ...tabThreeProjects];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <p>Here are some of my projects that I have worked on:</p>

            <Tab.Container id="projects-tabs" defaultActiveKey="liveProjects">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="liveProjects">Live Projects</Nav.Link>
                </Nav.Item>


                <Nav.Item>
                  <Nav.Link eventKey="frontendprojects">Frontend</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="phythonprojects">Phythonprojects</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Tab 1: all project */}
                <Tab.Pane eventKey="liveProjects">
                  <Row>
                    {liveProject.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                {/* Tab 2: Only tabTwoProjects */}
                <Tab.Pane eventKey="frontendprojects">
                  <Row>
                    {frontend.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                {/* Tab 3: Only tabThreeProjects */}
                <Tab.Pane eventKey="phythonprojects">
                  <Row>
                    {phythonprojects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};