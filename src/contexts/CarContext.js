import React, {createContext, useReducer, useEffect} from 'react';
import { carReducer } from '../reducers/carReducer';

export const CarContext = createContext();


const CarContextProvider = (props) => {

  const [cars, dispatch] = useReducer(carReducer, [], () => {
    const localData = localStorage.getItem('cars');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);
  
  return (
    <CarContext.Provider value={{cars, dispatch}}>
      {props.children}
    </CarContext.Provider>
  )
}


export default CarContextProvider;
