import womanProfile from './images/womanProfile.svg'
import manProfile from './images/manProfile.svg'

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
    return(
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer" }} onClick={handleEmployeeCardClick}>
            
        {(employee.gender === 'male') ? <img src={manProfile} className='card-img-top mx-auto' style={{width: "4vw"}} /> : <img src={womanProfile} className='card-img-top mx-auto' style={{width: "5.5vw"}} />
        }
        
        <div className='card-body'>
          <h5 className='card-title'>Full name: {employee.fullName}</h5>
          <p className='card-text'><b>Designation</b> {employee.designation}</p>
        </div>
      </div>
    )
}

export default TeamMemberCard