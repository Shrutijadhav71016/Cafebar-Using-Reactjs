import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {
  const navigate = useNavigate();
  const navigateToShopHere = () => {
    navigate('/menu'); // Navigate to the menu page when the button is clicked
  }
  return (
    <div className="home-bg">
      <div className="home_container">
        <h1>Welcome to <i> Cafe<span style={{color:'rgb(186, 91, 48)'}}>Bar</span></i></h1>
        <p><i>Where Every Sip Feels Like Home</i></p>
        
        <button onClick={()=>navigateToShopHere()}>Explore Menu</button>
      </div>
    </div>
  )
}

export default Home