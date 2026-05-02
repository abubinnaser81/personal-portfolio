import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjeectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
export const Projects = () => {


    const projects = [
        {
            title: "Project 1",
            description: "Description of Project 1",    
            imageUrl: projImg1,
            projectUrl: " "  
        },
         {
            title: "Project 2",
            description: "Description of Project 2",    
            imageUrl: projImg2,
            projectUrl: " "  
        },
         {
            title: "Project 3",
            description: "Description of Project 3",    
            imageUrl: projImg3,
            projectUrl: " "  
        },
         {
            title: "Project 4",
            description: "Description of Project 4",    
            imageUrl: projImg1,
            projectUrl: " "  
        },
         {
            title: "Project 5",
            description: "Description of Project 5",    
            imageUrl: projImg2,
            projectUrl: " "  
        }
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>  
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my projects that I have worked on:</p> 
                    <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                     
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
        <Nav.Item>
        <Nav.Link eventKey="first">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab Two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">
          Tab Three
        </Nav.Link>
      </Nav.Item>
    </Nav>
        <Tab.Content>
        <Tab.Pane eventKey="first">
        <Row>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    )
                })
            }
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                loren ipsum
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                loren ipsum
            </Tab.Pane>

        </Tab.Content>
    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Image" />    
        </section>
    )

};