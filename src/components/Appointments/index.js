// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentTitle: '',
    appointmentDate: '',
    initialAppointmentsList: [],
    appointmentsList: [],
    isClicked: false,
    isFiltered: false,
  }

  onAppointmentTitleChange = event =>
    this.setState({appointmentTitle: event.target.value})

  onAppointmentDateChange = event =>
    this.setState({appointmentDate: event.target.value})

  toggleStarStatus = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.appointmentId) {
          return {...eachAppointment, isClicked: !eachAppointment.isClicked}
        }
        return eachAppointment
      }),
      initialAppointmentsList: prevState.initialAppointmentsList.map(
        eachAppointment => {
          if (id === eachAppointment.appointmentId) {
            return {...eachAppointment, isClicked: !eachAppointment.isClicked}
          }
          return eachAppointment
        },
      ),
    }))
  }

  toggleStarredAppointments = () => {
    const {isFiltered} = this.state
    if (!isFiltered) {
      this.setState(prevState => ({
        appointmentsList: prevState.appointmentsList.filter(eachAppointment => {
          if (eachAppointment.isClicked) {
            return true
          }
          return false
        }),
        isFiltered: !prevState.isFiltered,
      }))
    } else {
      this.setState(prevState => ({
        appointmentsList: [...prevState.initialAppointmentsList],
      }))
    }
  }

  addAppointmentToAppointmentsList = event => {
    event.preventDefault()
    const {
      appointmentTitle,
      appointmentDate,
      appointmentsList,
      isClicked,
    } = this.state
    const appointmentId = uuidv4()

    const appointment = {
      appointmentId,
      appointmentTitle,
      appointmentDate,
      isClicked,
    }
    this.setState({
      appointmentsList: [...appointmentsList, appointment],
      initialAppointmentsList: [...appointmentsList, appointment],
      appointmentTitle: '',
      appointmentTitle: '',
    })
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
            <button type="button" onClick={this.toggleStarredAppointments}>
              Starred
            </button>
          </div>
          <ul>
            {appointmentsList.map(each => (
              <AppointmentItem
                key={each.appointmentId}
                eachAppointment={each}
                toggleStarStatus={this.toggleStarStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
