import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import CarItem from '../components/CarItem';
import { CarContext } from '../contexts/CarContext';

const Cars = () => {

  const { cars } = useContext(CarContext);

  return (
    <>
      <Jumbotron/>
      <section className="car-models">
        <div className="container">
          <div className="link-wrapper">
            <Link to="addCar" className="btn add">Add new car</Link>
          </div>
            { cars.length ? cars.map((item,index) => {
            return <CarItem {...item} key={index}/>
              }) : null }
        </div>
      </section>
    </>
  )
}

export default Cars;
