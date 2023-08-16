
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './patient/Dashboard';
import Appointment from './patient/Appointment';
import PatientLogin from './patient/PatientLogin';
import PatientSignup from './patient/PatientSignup';
import FileUpload from './patient/Document';
import DocDashboard from './doctor/docDashboard';
import DoctorLogin from './doctor/DoctorLogin';

const App = () => {


  return (
    <div>
      
    <Router>
      <Routes>
            <Route path="/patient" element={<Dashboard/>} /> 
            
            <Route path="/appointment" element={<Appointment/>} /> 
            <Route path='/patient/login' element={<PatientLogin/>} />
            <Route path='/patient/signup' element={<PatientSignup/> } />
            <Route path='/patientlogin' element={<PatientLogin/>} />
            <Route path="/document" element={<FileUpload/>} /> 
            <Route path="/doctor" element={<DocDashboard/>} />
            <Route path="/doctorlogin" element={<DoctorLogin/>} />

      </Routes>
    </Router>
    


    </div>
    
  )
}

export default App;