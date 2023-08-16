
import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';
import AddAppointments from "../components/AddAppointments";
import ListAppointments from '../components/ListAppointments';
import Sidebar from '../elements/sidebar';
import "./Appointment.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      showAddBody: true, 
      orderBy: 'patientName',
      orderDir: 'asc',
      searchText: '',
    };
  }

  saveAppointment = (newAppointment) => {
    let apts = this.state.appointments;
    apts.push(newAppointment);
    this.setState({
      appointments: apts
    });
  }

  deleteAppointment = (aptId) => {
    let apts = this.state.appointments;
    let aptToDelete = _.find(apts, _.matchesProperty('id', parseInt(aptId, 10)));
    const newApts = _.without(apts, aptToDelete)
    this.setState({
      appointments: newApts
    });
  }

  sort = (orderBy, orderDir) => {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });
  }

  search = (query) => {
    this.setState({
      searchText: query
    });
  }

  render() {
    let filteredApts = [];
    let { orderBy, orderDir, searchText, appointments } = this.state;

    appointments.forEach((item) => {
      if (item.patientName.toLowerCase().indexOf(searchText) !== -1) {
        filteredApts.push(item);
      }
    });

    filteredApts = _.orderBy(filteredApts, orderBy, orderDir);

    return (
      <>
        <Sidebar/>
        <Container>
          {this.state.showAddBody && <AddAppointments saveApt={this.saveAppointment} />}
          <ListAppointments appointments={filteredApts} onDelete={this.deleteAppointment} />
        </Container>
      </>
    );
  }
}

export default Appointment;

