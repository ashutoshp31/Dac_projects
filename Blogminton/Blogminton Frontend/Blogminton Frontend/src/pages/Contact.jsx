import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Base from '../components/Base';
function Contact() {
  return (
    <Base>
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center bg-light rounded p-4">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                      <i className="fa fa-map-marker-alt text-primary"></i>
                    </div>
                  </a>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>

              <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center bg-light rounded p-4">
                  <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                    <i className="fa fa-envelope-open text-primary"></i>
                  </div>
                  <a href="mailto:blogminton@protonmail.me" style={{ textDecoration: "none" }}>
                    blogminton@protonmail.me
                  </a>

                </div>
              </div>
              <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center bg-light rounded p-4">
                  <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                    <i className="fa fa-phone-alt text-primary"></i>
                  </div>
                  <span>+91 9604852583</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <iframe className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d484915.28813466564!2d73.23587368697508!3d18.2832753140739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688673461502!5m2!1sen!2sin"
              frameBorder="0" style={{ minHeight: "400px", border: "0" }} allowFullScreen="" aria-hidden="false"
              tabIndex="0"></iframe>
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4"><a href="https://freewebsitecode.com/contact-form"></a>.</p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Base>
  );
}
export default Contact;