export const Header = ({ deleted=false }) => {
  const text = `Admin dashboard - ${deleted ? 'deleted products' : 'product list'}`
  return <h1 className='dashboard__title'>{text}</h1>;
};
