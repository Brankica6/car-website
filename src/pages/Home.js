import React,  { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faKey, faWallet, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import homebg from '../assets/images/home-bg.jpg';
import img from '../assets/images/bmw.jpg';
import { CarContext } from '../contexts/CarContext';
import RecentCarsItem from '../components/RecentCarsItem';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Home = () => {

  const { cars } = useContext(CarContext);

  return (
    <>
      <div className="home-hero" style={{backgroundImage: `url(${homebg})`}}>
        <div className="container">
          <div className="hero-content">
          <Slide left duration={2000}>
            <h1>FINDING JUST THE CAR YOU NEED</h1>
          </Slide>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h2>About us</h2>
              <Fade bottom duration={2000}>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <p>Contrary to popular belief,
                Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                 making it over 2000 years old. Richard McClintock,
                 a Latin professor at Hampden-Sydney College in Virginia,
                 looked up one of the more obscure Latin words, consectetur,
                 from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                  discovered the undoubtable source.</p>
              </Fade>
            </div>
            <div className="col-2">
            <Fade bottom duration={2000} delay={200}>
              <img src={homebg} alt="about-us"/>
            </Fade>
            </div>
          </div>
          <div className="row">
            <Fade bottom duration={2000}>
              <div className="col-4">
                <div className="feature-box">
                   <div className="icon">
                     <FontAwesomeIcon icon={faCar} />
                   </div>
                   <div className="content">
                    <h5>All brands</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acantium doloremque laudantium.</p>
                   </div>
                 </div>
              </div>
            </Fade>
            <Fade bottom duration={2000} delay={300}>
              <div className="col-4">
                <div className="feature-box">
                   <div className="icon">
                     <FontAwesomeIcon icon={faKey} />
                   </div>
                   <div className="content">
                    <h5>DEALERSHIP</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acantium doloremque laudantium.</p>
                   </div>
                 </div>
              </div>
            </Fade>
            <Fade bottom duration={2000} delay={600}>
              <div className="col-4">
                <div className="feature-box">
                   <div className="icon">
                     <FontAwesomeIcon icon={faInfoCircle} />
                   </div>
                   <div className="content">
                    <h5>Free Support</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acantium doloremque laudantium.</p>
                   </div>
                 </div>
              </div>
            </Fade>
            <Fade bottom duration={2000} delay={900}>
              <div className="col-4">
                <div className="feature-box">
                   <div className="icon">
                     <FontAwesomeIcon icon={faWallet} />
                   </div>
                   <div className="content">
                    <h5>Affordable</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acantium doloremque laudantium.</p>
                   </div>
                 </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="recent-cars">
        <div className="container">
          <h2>Recent cars</h2>
          <div className="row">
          { cars.length <= 3 ?  cars.map((car,index) => {
            return <RecentCarsItem {...car} key = {index}/>}) :
            cars.slice(cars.length-3,cars.length).map((car,index) =>{
            return <RecentCarsItem {...car} key = {index}/>})
          }
          </div>
          <div className="link-wrapper">
            <Link to="cars" className="btn">Show all</Link>
          </div>
        </div>
      </section>
      <section className="about-2-section" style={{backgroundImage: `url(${img})`}}>
        <div className="container">
            <Fade bottom duration={2000}>
              <div className="about-2-box">
                <h2>CAR DEALERSHIP</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged.</p>
              </div>
            </Fade>
          </div>
      </section>
    </>
  )
}

export default Home;
