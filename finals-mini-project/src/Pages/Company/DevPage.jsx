import devs from './../../Data/DevData.json'
import { Link } from 'react-router-dom'
import './ComProfile.css'
export const DevPage = () => {
  const resumeList = devs.map(dev=>
    <li key={dev.id} className='company-card'>
      <Link to={`/Devs/${dev.id}`} state={{dev}}>
        <div className="thumb-container">
          <img src={dev.img} alt="pic" />
        </div>
        <div className="card-info">
          <h2>{dev.name}</h2>
          <h3>{dev.job}</h3>
        </div>
      </Link>
    </li>
  )
  return (
    <>
      <div className="section">
        <ul className='resumeList'>{resumeList}</ul>
      </div>
    </>
  )
}
