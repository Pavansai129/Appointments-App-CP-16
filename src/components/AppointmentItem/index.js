import {format} from 'date-fns'
import './index.css'

// Write your code here
const AppointmentItem = props => {
  const {eachAppointment, toggleStarStatus} = props
  const {
    appointmentId,
    appointmentTitle,
    appointmentDate,
    isClicked,
  } = eachAppointment
  const starImage = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const formatedDate = format(new Date(appointmentDate), 'dd MMMM yyyy, EEEE')
  const starStatusChange = () => {
    toggleStarStatus(appointmentId)
  }

  return (
    <li className="Appointment-item-container">
      <div>
        <p>{appointmentTitle}</p>
        <p>{formatedDate}</p>
      </div>
      <button type="button" data-testid="star" onClick={starStatusChange}>
        <img src={starImage} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
