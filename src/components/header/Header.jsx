import './Header.scss';
import logo from '../../assets/logo.svg';
import mode from '../../assets/mode.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='header__nav'>
          <div className='header__nav-logo'>
            <img src={logo} alt="logo" />
            <h2 className='logo__title'>Product</h2>
          </div>
          <div className='header__nav-menu'>
            <ul>
              <li><a href="#">Product</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
            <button className='signIn-btn'>Sign In</button>
            <button className='signUp-btn'>Sign Up</button>
            <button className='mode-btn'><img src={mode}/></button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header