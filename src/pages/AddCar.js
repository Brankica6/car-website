import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import { CarContext } from '../contexts/CarContext';


const AddCar = () => {

  const { dispatch } = useContext(CarContext);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [fuel, setFuel] = useState('');
  const [speed, setSpeed] = useState('');

  const  imageUpload = (file) => {
    getBase64(file).then(base64 => {
    return setImg(base64)
    });
  };

  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_CAR', car: {
      make, model, fuel, speed, price, year,desc,img
    }});
    alert('Success added a new car');
    setMake('');
    setModel('');
    setPrice('');
    setYear('');
    setDesc('');
    setImg('');
    setFuel('');
    setSpeed('')
  }

  return (
    <>
      <Jumbotron/>
      <section className="add-car">
        <div className="container">
          <div className="link-wrapper">
            <Link to="cars" className="btn add">Back To Cars</Link>
          </div>
          <div className="form-wrapper">
            <h1>Add new car</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="car-make"></label>
                <input type="text" name="make" placeholder="car mark" value={make}
                  onChange={(e) => setMake(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="car-model"></label>
                <input type="text" name="car-model" placeholder="model" value={model}
                  onChange={(e) => setModel(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="fuel"></label>
                <input type="text" name="fuel" placeholder="fuel type" value={fuel}
                  onChange={(e) => setFuel(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="speed"></label>
                <input type="number" name="speed" placeholder="max-speed mph" value={speed}
                  onChange={(e) => setSpeed(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="price"></label>
                <input type="number" name="car-model" placeholder="price eur" value={price}
                  onChange={(e) => setPrice(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="year"></label>
                <input type="number" name="car-model" placeholder="year" value={year}
                  onChange={(e) => setYear(e.target.value)} required/>
              </div>
              <div className = "form-group">
                <label htmlFor="desc"></label>
                <textarea required rows="6" placeholder="Description" value={desc}
                  onChange={(e) => setDesc(e.target.value)}/>
              </div>
              <div className = "form-group">
                <label htmlFor="image"></label>
                <input type="file" name="image" onChange={(e) => imageUpload(e.target.files[0])} required/>
              </div>
              <input type="submit" className="btn" value="Add Car" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddCar;
