import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, serErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // full name validation
    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full Name is required";
    }

    // email validation
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      )
    ) {
      validationErrors.email = "Email is not valid";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      validationErrors.subject = "Subject is required";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone number is not valid";
    }

    // Message validation
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    serErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form is submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ cursor: " pointer" }}>
      <div className=" row my-4">
        <div className=" col-lg-6 col-md-6 col-sm-6 col-12 my-3 my-sm-0">
          <input
            type="text"
            name="fullName"
            className=" form-control"
            placeholder=" Your Name"
            onChange={handleChange}
          />
          {errors.fullName && (
            <span className="fs-6 text-danger m-2">{errors.fullName}</span>
          )}
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-6 col-12">
          <input
            type="text"
            name="email"
            className=" form-control"
            placeholder=" Your Email"
            onChange={handleChange}
          />
          {errors.email && (
            <span className="fs-6 text-danger m-2">{errors.email}</span>
          )}
        </div>
      </div>
      <div className=" row my-4">
        <div className=" col-lg-6 col-md-6 col-sm-6 col-12 my-3 my-sm-0">
          <input
            type="text"
            name="subject"
            className=" form-control "
            placeholder=" Your Subject"
            onChange={handleChange}
          />
          {errors.subject && (
            <span className="fs-6 text-danger m-2">{errors.subject}</span>
          )}
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-6 col-12">
          <input
            type="tel"
            name="phone"
            className=" form-control "
            placeholder=" Your Phone Number"
            onChange={handleChange}
          />
          {errors.phone && (
            <span className="fs-6 text-danger m-2">{errors.phone}</span>
          )}
        </div>
      </div>

      <div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="7"
          className="form-control"
          placeholder="Your Message"
          onChange={handleChange}
        ></textarea>

        {errors.message && (
          <span className="fs-6 text-danger m-2">{errors.message}</span>
        )}
      </div>

      <button className=" mt-4" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
