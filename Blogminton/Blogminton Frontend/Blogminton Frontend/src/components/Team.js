import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Base from './Base';
const Team = () => {
  const teamMembers = [
    {
      name: 'Ashutosh Patil',
      designation: 'Full Stack Developer',
      imageSrc: './images/ashutosh.jpg',
      facebookLink: '',
      twitterLink: '',
      instagramLink: 'https://www.instagram.com/_ultra_instinct___/',
    },
    {
      name: 'Saket Autee',
      designation: 'Full Stack Developer',
      designation: '',
      imageSrc: './images/saket.jpg',
      facebookLink: '',
      twitterLink: '',
      instagramLink: 'https://www.instagram.com/saket_._172/',
    },
    {
      name: 'Shubham Wadkar',
      designation: 'Full Stack Developer',
      imageSrc: './images/shubham.jpg',
      facebookLink: '',
      twitterLink: '',
      instagramLink: 'https://www.instagram.com/shubham_wadkar1008/',
    },
    {
      name: 'Aayush Pachpande',
      designation: 'Full Stack Developer',
      imageSrc: './images/ayush.jpg',
      facebookLink: '',
      twitterLink: '',
      instagramLink: '',
    },
    {
      name: 'Dhiraj Patil',
      designation: 'Full Stack Developer',
      imageSrc: './images/dhiraj.jpg',
      facebookLink: '',
      twitterLink: '',
      instagramLink: '',
    },
    
  ];

  return (
    <Base>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Developers</h6>
          <h1 className="mb-5">Team</h1>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={`0.${index + 1}s`}>
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={member.imageSrc} alt={member.name} />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '23px' }}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href={member.facebookLink}>
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href={member.twitterLink}>
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href={member.instagramLink}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{member.name}</h5>
                  <small>{member.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Base>
  );
};

export default Team;