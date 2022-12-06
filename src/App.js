import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShopPage from './components/shop-page/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Navigation from './pages/navigation/navigation';
import SignIn from './pages/sign-in/sign-in';


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route  path='/shop' element={<ShopPage/>}/>
        <Route  path='/sign-in' element={<SignIn/>}/>
        </Route >
      </Routes>
    </div>
  );
}

export default App;
