import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <Col sm={6} md={4}>
      <a target="_blank" href={projectUrl} className="proj-imgbx">
        <img src={imageUrl} alt={title} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  );
};