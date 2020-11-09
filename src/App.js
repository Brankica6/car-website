import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import AddCar from './pages/AddCar';
import CarContextProvider from './contexts/CarContext';


function App() {
  return (
    <>
      <CarContextProvider>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/cars'>
              <Cars/>
            </Route>
            <Route path='/AddCar'>
              <AddCar/>
            </Route>
          </Switch>
          <Footer/>
      </CarContextProvider>
    </>
  );
}

export default App;
