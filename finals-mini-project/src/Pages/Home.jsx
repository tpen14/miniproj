import './Home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <>
    <div className="section">
        <div className="hero-text">
          <h1>KeyStaxx</h1>
          <p>Unlock Your Potential, One Keystroke at a Time.</p>
          <Link><button className="hero-button">Browse Products</button></Link>
        </div>
    </div>
    <div className="about">
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nemo nam, velit quam delectus reprehenderit officia. Iste magnam quisquam, dolore assumenda debitis adipisci minus earum eaque sunt suscipit. Hic enim incidunt esse beatae nobis deserunt quos aspernatur omnis ratione, tempora explicabo fuga repellat dolores. Hic et saepe id a animi!</p>
        <button className="hero-button">Read More</button>
    </div>
    <div className="review-card">
      <h2>Reviews</h2>
        <h4>Rating: *****</h4>
        <p>Review: Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi rerum quia ut a. Consectetur sapiente optio non ad eveniet.</p>
    </div>
    </>
  )
}
