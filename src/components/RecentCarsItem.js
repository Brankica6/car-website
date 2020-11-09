import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTachometerAlt, faGasPump, faEuroSign}
        from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const RecentCarsItem = (props) => {
  const { make, model, price, fuel, speed, year, img, desc } = props;
  return (
    <div className="col-3">
      <Fade bottom duration={3000}>
        <div className="car-item">
          <div className="car-img">
            <img src={img} alt="privremena"/>
          </div>
            <div className="price-box">
              <span className="rated">Top rated</span>
              <span className="price">{price}<FontAwesomeIcon icon={faEuroSign}/></span>
            </div>
            <div className="car-content">
            <h3>{make} {model}</h3>
            <p>{desc}</p>
            <ul className="car-info">
  						<li><FontAwesomeIcon icon={faCalendarAlt} /><p>{year}</p></li>
  						<li><FontAwesomeIcon icon={faTachometerAlt}/><p>{speed} mph</p></li>
  						<li><FontAwesomeIcon icon={faGasPump}/><p>{fuel}</p></li>
  					</ul>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default RecentCarsItem;
