import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

export const Newsletter = ({ onValidate, status, message }) => {
  const [email, setEmail] = useState("");

  const clearFields = () => {
    setEmail("");
  };

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && email.indexOf("@") > -1) {
      onValidate({
        EMAIL: email,
      });
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5} className="px-1">
            <h3>Subscribe to our Newsletter</h3>

            {status === "sending" && (
              <Alert variant="info">Sending...</Alert>
            )}

            {status === "error" && (
              <Alert variant="danger">{message}</Alert>
            )}

            {status === "success" && (
              <Alert variant="success">
                {message || "Subscribed successfully!"}
              </Alert>
            )}
          </Col>

          <Col md={6} xl={7} className="px-1">
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};