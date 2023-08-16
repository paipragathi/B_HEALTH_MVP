import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./landing.css";
import {useNavigate} from 'react-router-dom';
const Landing = () => {
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
const navigate= useNavigate();
  return(
  <>
  <div className="full">

  <div id="hero" className="d-flex align-items-center">
    <div className="container" style={{backgroundImage:'url("https://img.freepik.com/premium-photo/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.jpg?w=2000")', height:"500px"}}>
  
      <h1>Welcome to B-Health</h1>
      <h2>A Blockchain based healthcare management system</h2>
      <div className="patient">
  
  <div class="buttons-container">
  <button class="button-arounder" onClick={()=>{
                    navigate("/patientlogin")
                 }}> PATIENT LOGIN/SIGNUP</button>
                 <div className="gap">
                  |
                 </div>
  <button class="button-arounder" onClick={()=>{
                    navigate("/doctorlogin")
                 }}> DOCTOR LOGIN</button>
</div>
</div>
 


    </div>
  </div>

        <div className="div-title">
          <h2>Doctors</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
               <div className="pic">
              </div>
              
              <div className="member-info">

                <h4>Walter White</h4>
             

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
               <div className="pic"><img src="https://wallpapers.com/images/featured/doctor-kwucobzhm0etbcwy.jpg" className="img-fluid" alt="" width={"600px"}/></div> 
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
                

                
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
               <div className="pic"><img src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*" height={"500px"}className="img-fluid" alt=""/></div>  
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
                
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="https://media.istockphoto.com/id/184312638/photo/portrait-of-smiling-nurse-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=URbMQ35pA_pl1KPeBmV3-UZQasUlocB2Dz_v4alorv8=" className="img-fluid" alt=""/></div>  
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div id="faq" className="faq div-bg">
      <div className="container">

        <div className="div-title">
          <h2>Frequently Asked Questions</h2>
          

      <div className="container">
        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
      </div>
      </div>
      </div>
      </div>
      
    
    </div>
  </>
  );
}
export default Landing;
