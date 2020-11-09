import uuid from 'react-uuid';
import { img } from '../data/imgbase64';

const initialState = [
    {
      year:'2000',
      make: 'Mercedes-Benz',
      model: 'G-Class',
      price:'100000',
      fuel: 'Premium Gasoline',
      speed: '140',
      desc:'Lorem Ipsum passages, and more recently with desktop publishing soft like aldus pageMaker including versions.',
      img: img.mercedes,
      id: uuid()
    },
    {
      year:'2010',
      make: 'Range Rover Sport',
      model: 'HSE',
      desc:'Lorem Ipsum passages, and more recently with desktop publishing soft like aldus pageMaker including versions.',
      price:'80000',
      speed: '130',
      fuel: 'diesel',
      img: img.rangerover,
      id: uuid(),
    },
    {
      year:'1978',
      make: 'Chevrolet',
      model: 'Camaro',
      desc:'Lorem Ipsum passages, and more recently with desktop publishing soft like aldus pageMaker including versions.',
      price:'20000',
      speed: '100',
      fuel: 'Gasoline',
      img: img.chevrolet,
      id: uuid()
    }
]

localStorage.setItem('cars', JSON.stringify(initialState));

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [...state, {
        make: action.car.make,
        model: action.car.model,
        price: action.car.price,
        fuel: action.car.fuel,
        year: action.car.year,
        speed: action.car.speed,
        img: action.car.img,
        desc: action.car.desc,
        id: uuid()
    }]
    case 'REMOVE_CAR':
      return state.filter(car => car.id !== action.id);
    default:
      return state;
  }
}
