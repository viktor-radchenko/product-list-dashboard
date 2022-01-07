import { useEffect, useState } from 'react';

import './App.scss';
import './Dashboard.scss';
import Header from './components/header';
import Stats from './components/stats';
import Controls from './components/controls';
import List from './components/list';
import Footer from './components/footer';

import { productList as prodList } from './productList';

const App = () => {
  const [productList, setProductList] = useState(prodList);
  const [deletedProducts, setDeletedProducts] = useState([]);
  const [filterKey, setFilterKey] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [currentTab, setCurrentTab] = useState('all');

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

  const toggleTabs = (e) => {
    setCurrentTab(e.target.value);
  };

  useEffect(() => {
    const filtered = productList.filter((item) => item.name.toLowerCase().includes(filterKey));
    setFilteredList(filtered);
  }, [productList, filterKey]);

  const list =
    currentTab === 'all' ? (
      <List filteredList={filteredList} handleItemButton={handleItemDelete} />
    ) : (
      <List filteredList={deletedProducts} handleItemButton={handleItemRestore} deleted />
    );

  return (
    <div className='wrapper'>
      <Header currentTab={currentTab} />
      <main className='main dashboard'>
        <div className='container'>
          <div className='dashboard__inner'>
            <div className='dashboard__content'>
              <div className='dashboard__top'>
                <Stats total={productList.length} deleted={deletedProducts.length} toggleTabs={toggleTabs} />
              </div>
              {list}
            </div>
            <div className='dashboard__actions'>
              <Controls handleFilterKey={handleFilterKey} handleItemAdd={handleItemAdd} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
