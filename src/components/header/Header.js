
import './Header.scss';
import logo from './assets/logo.svg'

export const Header = ({ deleted=false }) => {
  const text = `Admin dashboard - ${deleted ? 'deleted products' : 'product list'}`
  return (
      <header className='header'>
        <div className='container header__inner'>
          <a className='logo header__logo'>
            <img width='50' src={logo} alt='logo' />
          </a>
          <h1 className='header__title'>{text}</h1>
        </div>
        
      </header>
  )
};
