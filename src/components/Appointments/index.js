// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentTitle: '', appointmentDate: '', appointmentsList: []}

  onAppointmentTitleChange = event =>
    this.setState({appointmentTitle: event.target.value})

  onAppointmentDateChange = event =>
    this.setState({appointmentDate: event.target.value})

  addAppointmentToAppointmentsList = event => {
    event.preventDefault()
    const {appointmentTitle, appointmentDate, appointmentsList} = this.state
    const appointmentId = uuidv4()
    console.log(appointmentId)
    const isClicked = false
    const appointment = {
      appointmentId,
      appointmentTitle,
      appointmentDate,
      isClicked,
    }
    console.log(appointment)
    this.setState({appointmentsList: [...appointmentsList, appointment]})
  }

  render() {
    const {appointmentTitle, appointmentDate, appointmentsList} = this.state
    return (
      <div className="appointments-app-container">
        <div>
          <div className="appointments-card-container">
            <div>
              <h1>Add Appointment</h1>
              <form
                className="input-form"
                onSubmit={this.addAppointmentToAppointmentsList}
              >
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  value={appointmentTitle}
                  onChange={this.onAppointmentTitleChange}
                />
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  id="date"
                  value={appointmentDate}
                  onChange={this.onAppointmentDateChange}
                />
                <button type="submit">Add</button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="line" />
          <div className="appointments-and-starred-button">
            <h1>Appointments</h1>
            <button type="button">Starred</button>
          </div>
          <ul>
            {appointmentsList.map(each => (
              <AppointmentItem
                key={each.appointmentId}
                eachAppointment={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
