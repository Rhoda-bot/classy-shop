import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss'
import { ReactComponent as ShopLogo } from '../../assets/crown.svg'; 
const Navigation = () =>{
    return(
      <>
        <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <ShopLogo className="logo"/>
                </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/sign-in'>Sign-in</Link>
            </div>
        </div>
        <Outlet/>
      </>
    )
  }
  export default Navigation;