import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

export const Newsletter = ({ onValidate, status, message }) => {
  const [email, setEmail] = useState("");
  const [localError, setLocalError] = useState("");

  const clearFields = () => {
    setEmail("");
    setLocalError("");
  };

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLocalError("");

    if (!email) {
      setLocalError("Please enter your email address.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setLocalError("Please enter a valid email address.");
      return;
    }

    if (onValidate) {
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
            <h3>Subscribe to my Newsletter</h3>

            {status === "sending" && (
              <Alert variant="info">Sending...</Alert>
            )}

            {localError && (
              <Alert variant="warning">{localError}</Alert>
            )}

            {status === "success" && (
              <Alert variant="success">
                {message || "Subscribed successfully!"}
              </Alert>
            )}

            {status === "error" && !localError && (
              <Alert variant="warning">
                Something went wrong. Please try again later.
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

                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};