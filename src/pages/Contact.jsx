import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Contact() {
  // State for form fields and validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for form submission (used to trigger useEffect)
  const [submitted, setSubmitted] = useState(false);

  // useEffect that runs when 'submitted' state changes
  useEffect(() => {
    const submitUserData = async () => {
      if (submitted) {
        const { name, email, phone, message } = formData;

        try {
          // Send data using Axios to your backend API
          const response = await axios.post('http://localhost:4001/api/user/contact', { name, email, phone, message });

          // Handle the response (e.g., success message or redirect)
          console.log('User created successfully:', response.data);
          alert('Message submitted successfully!');
        } catch (error) {
          // Handle errors (e.g., validation errors, server errors)
          console.error('There was an error!', error);
          alert('Failed to send message. Please try again.');
        } finally {
          setSubmitted(false); // Reset submission flag
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form data after submission
          setErrors({ name: "", email: "", phone: "", message: "" }); // Reset errors after submission
        }
      }
    };

    submitUserData(); // Call the function inside useEffect when 'submitted' changes
  }, [submitted, formData]); // Dependency array to trigger on formData change

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (must be 10 digits)";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      setSubmitted(true); // Set 'submitted' state to trigger useEffect
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-dark text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4">CONTACT US</h1>
              <p className="lead mt-3">
                We are here to assist you. Reach out for any queries or
                assistance!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pt-5 pb-5 contact-part">
        <Container>
          <Row className="gy-4">
            {/* Contact Form */}
            <Col lg={6} className="mb-4">
              <h2 className="mb-3">Get in Touch</h2>
              <p className="text-muted">
                Please fill out the form below, and we’ll get back to you soon.
              </p>
              <Form onSubmit={handleSubmit}>
                {/* Name Field */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`py-3 ${errors.name && "is-invalid"}`}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`py-3 ${errors.email && "is-invalid"}`}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </Form.Group>

                {/* Phone Field */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Your Mobile Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`py-3 ${errors.phone && "is-invalid"}`}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </Form.Group>

                {/* Message Field */}
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`py-3 ${errors.message && "is-invalid"}`}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </Form.Group>

                <Button
                  style={{ backgroundColor: "#962a30" }} // Corrected `backgroundColor`
                  type="submit"
                  className="btn-lg w-100 mb-4 custom-button"
                >
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Google Map */}
            <Col lg={6}>
              <div className="mt-4">
                <h4 className="mb-3">Find Us on the Map</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.539204681813!2d72.83738317497635!3d19.040016182157224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d94b9972f%3A0x7b4a782f46c88fb8!2sBait-un-Nasr!5e0!3m2!1sen!2sin!4v1737868320195!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Branch Details Section */}
      <section className="pt-5 pb-5 branch-details">
        <Container>
          <Row>
            <h2 className="mb-3 text-center">Our Branches</h2>
            <p className="text-muted text-center mb-4">
              Visit or contact any of our branches listed below for assistance.
            </p>

            <div className="d-flex flex-wrap justify-content-between">
              {/* Individual Branches */}
              {[
                {
                  title: "Head Office",
                  address:
                    "Shop No. 3, Farida Apartment, L.J. Cross Road No.2, Mahim, Mumbai–400016.",
                  tel: "24463508",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=Shop+No.+3,+Farida+Apartment,+L.J.+Cross+Road+No.2,+Mahim,+Mumbai–400016",
                },
                {
                  title: "Mahim",
                  address:
                    "Shop No. 2, Farida Apartment, L.J. Cross Road No.2, Mahim, Mumbai–400016.",
                  tel: "24463508",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=Shop+No.+3,+Farida+Apartment,+L.J.+Cross+Road+No.2,+Mahim,+Mumbai–400016",
                },
                {
                  title: "Bandra (W)",
                  address:
                    "Shop No. 24, Zarina Co-op. Hsg. Soc., Bazar Road, Bandra (West), Mumbai – 400050.",
                  tel: "26430983",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=Shop No. 24, Zarina Co-op. Hsg. Soc., Bazar Road, Bandra (West), Mumbai – 400050.",
                },
                {
                  title: "Dharavi",
                  address:
                    "Shop No. 5, Nagree Apartments, Dharavi Main Road, Near Dharavi Jama Masjid, Mumbai – 400017.",
                  tel: "24078395",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=2VV2+FMP Sunni jama masjid, Dharavi Main Rd, Sheshwadi, Dharavi, Mumbai, Maharashtra 400017",
                },
                {
                  title: "Morland Road",
                  address:
                    "Qayyum Manzil, Shop No.7, Near Rehmani Mosque, Of Moreland Road, Madanpura, Mumbai – 400008.",
                  tel: "23071727",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=XRCG+798, Morland Rd, Madanpura, Mumbai, Maharashtra 400008.",
                },
                {
                  title: "Memonwada",
                  address:
                    "68/A, 'Nas'r House', Memonwada Road, Near Chuna Bhatti Masjid, Mumbai – 400003.",
                  tel: "234401070",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=22, Mohammed Ali Rd, Pydhonie, Mandvi, Mumbai, Maharashtra 400003.",
                },
                {
                  title: "Jogeshwari (W)",
                  address:
                    "Room No. G 2, Sayed Chawl SRA CHSL, S.V. Road, Near Laiba Hotel, Jogeshwari (West), Mumbai – 400102.",
                  tel: "26782027",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=Room No. G 2, Sayed Chawl SRA CHSL, S.V. Road, Near Laiba Hotel, Jogeshwari (West), Mumbai – 400102.",
                },
                {
                  title: "Jogeshwari (E)",
                  address:
                    "'Nasr Spot', Janta Quarters, Colaba Plot, House No.KEM-1008, Near Jhula Maidan, Jogeshwari East, Mumbai – 400060.",
                  tel: "28378366",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=Saraswati Baug, Bandra Plot, Jogeshwari East, Mumbai, Maharashtra 400060",
                },
                {
                  title: "Mumbra",
                  address:
                    "Shop No. 9', Nasheman Colony,Behind Pizza House, Old Mumbai Pune Rd,Kausa, Mumbra Thane – 400612.",
                  tel: "9372487506",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=H shop no, Telephone Exchange, 1, near kausa, Nasheman Colony, Old Nasheman Colony, Kausa, Mumbra, Thane, Maharashtra 400612.",
                },
                {
                  title: "Mira Road",
                  address:
                    "office No. 116', New Poonam Plaza,opp Narendra Park, Haideri Chowk Rd, Mira road(E) Thane – 401107.",
                  tel: "8169664640",
                  googleMapsUrl:
                    "https://www.google.com/maps?q=office No. 116', New Poonam Plaza,opp Narendra Park, Haideri Chowk Rd, Mira road(E) Thane – 401107.",
                },
              ].map((branch, index) => (
                <Col md={6} lg={4} key={index} className="mb-4 ">
                  <div className="branch-card p-4 border">
                    <h5 className="fw-bold">{branch.title}</h5>
                    <p>{branch.address}</p>
                    <p>
                      <i className="fa-solid fa-phone  me-2"></i>
                      Tel.: {branch.tel}
                    </p>
                    <Button
                      style={{ backgroundColor: "#962a30" }}
                      onClick={() =>
                        window.open(branch.googleMapsUrl, "_blank")
                      }
                    >
                      Get Direction
                    </Button>
                  </div>
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
