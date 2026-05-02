import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { GeoAltFill, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");

    const formData = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
      _subject: "New Contact Message From Portfolio Website",
      _captcha: "false",
      _template: "table",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/abunaser50032@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      setButtonText("Send");

      if (response.ok) {
        setStatus({
          success: true,
          message: "Message sent successfully!",
        });

        setFormDetails(formInitialDetails);
      } else {
        setStatus({
          success: false,
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setButtonText("Send");

      setStatus({
        success: false,
        message: "Message failed to send. Please try again.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-title">
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <Row className="align-items-center">
          <Col md={5}>
            <div className="contact-info-bx">
              <p className="contact-small-title">Get In Touch</p>

              <h1>
                Let’s Talk For your <span>Next Projects</span>
              </h1>

              <p className="contact-desc">
                Feel free to contact me for any project, portfolio work, or
                collaboration. I will reply as soon as possible.
              </p>

              <h3>More Info</h3>

              <div className="contact-info-item">
                <GeoAltFill />
                <span>Chattogram, Bangladesh</span>
              </div>

              <div className="contact-info-item">
                <EnvelopeFill />
                <a href="mailto:abunaser50032@gmail.com">
                  abunaser50032@gmail.com
                </a>
              </div>

              <div className="contact-info-item">
                <TelephoneFill />
                <a href="tel:+8801832617081">01832617081</a>
              </div>
            </div>
          </Col>

          <Col md={7}>
            <div className="contact-form-bx">
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-2">
                    <label>First Name *</label>
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      required
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>

                  <Col sm={6} className="px-2">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      required
                      onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                      }
                    />
                  </Col>

                  <Col sm={6} className="px-2">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      required
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>

                  <Col sm={6} className="px-2">
                    <label>Phone No.</label>
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>

                  <Col className="px-2">
                    <label>Message *</label>
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Write Message..."
                      required
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>

                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>

                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};