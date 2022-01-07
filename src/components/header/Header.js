import './Header.scss';
import logo from './assets/logo.svg'

export const Header = ({ currentTab="all" }) => {
  const text = `Admin dashboard - ${currentTab === 'all' ? 'product list' : 'deleted products' }`
  return (
      <header className='header'>
        <div className='container header__inner'>
          <a className='logo header__logo' href=''>
            <img width='50' src={logo} alt='logo' />
          </a>
          <h1 className='header__title'>{text}</h1>
        </div>
        
      </header>
  )
};
