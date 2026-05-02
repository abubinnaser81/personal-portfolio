import { Row, Col,Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    return (    
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Here are some of my skills and technologies I have experience with:</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                             <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                             <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                             <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MongoDB</h5>

                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Bootstrap</h5>

                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Firebase</h5>

                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            </Carousel>
                        </div>

                  </Col>
                 </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
             <div className="soft-skills-bx">
              <h3>Soft Skills</h3>

              <div className="soft-skills-list">
                <span>Communication Skills</span>
                <span>Management</span>
                <span>Leadership</span>
                <span>Problem Solving</span>
                <span>Teamwork</span>
                <span>Critical Thinking</span>
              </div>
            </div>

        </section>
        
    );
};     