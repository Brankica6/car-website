import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/bg.jpg';


const Jumbotron = () => {

  return (
      <section className="section-jumbotron" style={{backgroundImage: `url(${img})`}}>
       <div className="container content">
         <ul className="breadcrumbs">
            <li><Link to={`/`}>Home</Link></li> /
            <li>Cars</li>
         </ul>
         <h2>Cars</h2>
       </div>
     </section>
  )
}

export default Jumbotron;
