import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjeectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/yumhub1.png";
import projImg2 from "../assets/img/yumhub2.png";
import projImg3 from "../assets/img/yumhub3.png";
import projImg4 from "../assets/img/yumhub4.png";
import projImg5 from "../assets/img/yumhub5.png";

export const Projects = () => {

  const liveProject = [
    {
      title: "YumHub Project 1",
      description: "Frontend homepage design",
      imageUrl: projImg1,
      projectUrl: "https://capable-parfait-b31267.netlify.app/",
    },
   
  ];

    const frontendprojects = [
    {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg4,
      projectUrl: "#",
    },]

  
  const phythonprojects = [
    {
      title: "YumHub Project 4",
      description: "Order page design",
      imageUrl: projImg4,
      projectUrl: "#",
    },
    {
      title: "YumHub Project 5",
      description: "Responsive web design",
      imageUrl: projImg5,
      projectUrl: "#",
    },
     {
      title: "YumHub Project 2",
      description: "Food menu page design",
      imageUrl: projImg2,
      projectUrl: "#",
    },
    {
      title: "YumHub Project 3",
      description: "Restaurant listing page",
      imageUrl: projImg3,
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
                  <Nav.Link eventKey="phythonprojects">Full Stack</Nav.Link>
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
                    {frontendprojects.map((project, index) => {
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