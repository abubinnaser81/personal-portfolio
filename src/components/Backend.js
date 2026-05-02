import { Container } from "react-bootstrap";
import { BookHalf } from "react-bootstrap-icons";

export const Backend = () => {
  const backendItems = [
    {
      year: "2025-Present",
      title: "Treasurer secretary",
      institute: "PCIU Computer Club",
      description:
        "Managed club finances, maintained budget records, supported event planning, and worked with team members to organize technical programs, workshops, and club activities.",
      side: "right",
    },
    {
      year: "2024-Present",
      title: "Web Development",
      institute:"2 years + self learning experience",
      description:
        "I Completed my full stack web development course from Programming Hero and have been actively working on various web development projects, including my personal portfolio website, to enhance my skills and gain practical experience in building responsive and user-friendly web applications.",
      side: "left",
    },
   
  ];

  const educationItems = [
    {
      year: "2022-Present",
      title: "BSc in Computer Science and Engineering",
      institute: "Port City International University",
      description:
        "Currently pursuing a BSc in Computer Science and Engineering at Port City International University.",
      side: "right",
    },
    {
      year: "2018-2020",
      title: "Higher Secondary Certificate (Alim /Science)",
      institute: "Baitush Sharaf Adarsha kamil Madrasha",
      description:
        "Completed Higher Secondary education under the Bangladesh Madrasah Education Board with a Science background. Studied core science subjects and developed foundational knowledge in analytical thinking, problem-solving, and academic discipline.",
      side: "left",
    },
    {
      year: "2016-2018",
      title: "SSC(Dakhil) / Science",
      institute: "Adhunagar Aktaria Dakhil Madrasha",
      description:
        "Completed Secondary School Certificate (Dakhil) in Science from Adhunagar Aktaria Dakhil Madrasha under the Bangladesh Madrasah Education Board. Gained foundational knowledge in science, mathematics, analytical thinking, and academic discipline.",
      side: "right",
    },
  ];

  const renderTimeline = (items) => {
    return (
      <div className="backend-timeline">
        {items.map((item, index) => (
          <div
            className={`backend-timeline-item ${
              item.side === "left" ? "left" : "right"
            }`}
            key={index}
          >
            <div className="backend-icon">
              <BookHalf />
            </div>

            <div className="backend-content">
              <span className="backend-year">{item.year}</span>
              <h3>{item.title}</h3>
              <h4>{item.institute}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="backend" id="backend">
      <Container>
        <div className="backend-title">
          <h2>
            Backend <span>Skills</span>
          </h2>
          <p>
            Here is my backend learning journey and technologies I work with.
          </p>
        </div>

        {renderTimeline(backendItems)}

        <div className="backend-title education-title">
          <h2>
            My Educational <span>Background</span>
          </h2>
          <p>Here is my academic background and study journey.</p>
        </div>

        {renderTimeline(educationItems)}

        {/* 
          Later experience add korte chaile ekhane same system use korba:
          1. experienceItems array banaba
          2. tarpor {renderTimeline(experienceItems)} call korba
        */}
      </Container>
    </section>
  );
};