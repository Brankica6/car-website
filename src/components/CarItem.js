import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTachometerAlt, faGasPump, faTrashAlt, faEuroSign }
        from '@fortawesome/free-solid-svg-icons';
import { CarContext } from '../contexts/CarContext';
import Fade from 'react-reveal/Fade';

const CarItem = (props) => {

  const { dispatch } = useContext(CarContext);
  const { make, model, price, fuel, speed, year, img, desc, id } = props;

  return (
    <Fade bottom duration={2000} delay={300}>
      <div className="car-box">
        <div className="car-img">
          <img src={props.img} alt="privremena"/>
        </div>
        <div className="car-desc">
          <div className="price-box">
            <span className="rated">Top rated</span>
            <span className="price">{price} <FontAwesomeIcon icon={faEuroSign}/></span>
          </div>
          <h3>{make} {model}</h3>
          <p>{desc}</p>
          <ul className="car-info">
    				<li><FontAwesomeIcon icon={faCalendarAlt}/><p>{year}</p></li>
    				<li><FontAwesomeIcon icon={faTachometerAlt}/><p>{speed} mph</p></li>
    				<li><FontAwesomeIcon icon={faGasPump}/><p>{fuel}</p></li>
    			</ul>
          <button className="btn delete" onClick={() => dispatch({type:'REMOVE_CAR', id:id})}>Delete <FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
      </div>
    </Fade>
  )
}

export default CarItem;
