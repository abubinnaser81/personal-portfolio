import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.png";
export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                    <img src={logo} alt="Logo" />

                        
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ab-naser-4471532b1/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="Icon" />
                            </a>
                            <a href="https://www.facebook.com/ab.naser.81/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="Icon" />
                            </a>
                            <a href="https://www.instagram.com/nsr.venx/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="Icon" />
                            </a>
                            <a href="https://github.com/abubinnaser81" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="Icon" />
                            </a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
            </footer>
    )
}