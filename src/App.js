import { useEffect, useState } from 'react';

import './App.scss';
import './Dashboard.scss';
import Header from './components/header';
import Stats from './components/stats';
import Controls from './components/controls';
import List from './components/list';
import Footer from './components/footer';



const App = () => {
  const [productList, setProductList] = useState(() => [
    'MacBook Pro 14',
    'MacBook Pro 16',
    'Lenovo IdeaPad',
    'Huawei MateBook',
    'Microsoft Surface Book',
  ]);
  const [deletedProducts, setDeletedProducts] = useState([]);
  const [filterKey, setFilterKey] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [deletedTab, setDeletedTab] = useState(false);

  const handleFilterKey = (e) => {
    setFilterKey(e.target.value.toLowerCase());
  };

  const handleItemAdd = (item) => {
    setProductList((prev) => [...prev, item]);
  };

  const handleItemDelete = (itemToDelete) => {
    const list = productList.filter((item) => item !== itemToDelete);
    setProductList(list);
    setDeletedProducts((prev) => [...prev, itemToDelete]);
  };

  const handleItemRestore = (itemToRestore) => {
    const list = deletedProducts.filter((item) => item !== itemToRestore);
    setDeletedProducts(list);
    setProductList((prev) => [...prev, itemToRestore]);
  };

  const toggleTabs = (tab) => {
    setDeletedTab(tab);
  };

  useEffect(() => {
    const filtered = productList.filter((item) => item.toLowerCase().includes(filterKey));
    setFilteredList(filtered);
  }, [productList, filterKey]);

  const list = deletedTab ? (
    <List filteredList={deletedProducts} handleItemButton={handleItemRestore} deleted />
  ) : (
    <List filteredList={filteredList} handleItemButton={handleItemDelete} />
  );

  return (
    <div className='wrapper'>
      <Header deleted={deletedTab}/>
      <main className='main dashboard'>
        <div className="container">
          <div className="dashboard__inner">
            <div className="dashboard__content">
              <div className="dashboard__top">
                <Stats total={productList.length} deleted={deletedProducts.length} toggleTabs={toggleTabs} />
                
              </div>
              {list}
            </div>
            <div className="dashboard__actions">
              <Controls handleFilterKey={handleFilterKey} handleItemAdd={handleItemAdd} />
            </div>
          </div>
          
          
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
