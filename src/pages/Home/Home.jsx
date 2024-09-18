import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CiSearch, CiSliderHorizontal } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchedProduct } from '../../store/actions/product';

const Home = () => {
  const [searched, setSearched] = useState('');
  const dispatch = useDispatch();

  const setIsActive = ({ isActive }) => (isActive ? "tab__item tab__item-active" : "tab__item");

  // Функция поиска
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearched(value);

    dispatch(getSearchedProduct(value));  // Передаем введённое значение
  };

  return (
    <>
      <div className="page-mobile">
        <header className='header'>
          <div className='header__info'>
            <span>Hello 🖐</span>
            <h2>John!</h2>
          </div>

          <div className='header__search'>
            <div className='search'>
              <input 
                type="text" 
                placeholder="Search coffee" 
                className='search__input' 
                onChange={handleSearchChange}
              />
              <CiSearch className='search__icon' />
            </div>

            <button className='btn'>
              <CiSliderHorizontal className='btn-icon' />
            </button>
          </div>

          <div className="banner">
            <img src="../images/banner.png" alt="" className='banner__image' />
          </div>
        </header>

        <main className='content'>
          <div className="menu">
            <ul className="tab">
              <li><NavLink to="/" className={setIsActive}>All Coffee</NavLink></li>
              <li><NavLink to="/categories/1" className={setIsActive}>Machiato</NavLink></li>
              <li><NavLink to="/categories/2" className={setIsActive}>Latte</NavLink></li>
              <li><NavLink to="/categories/3" className={setIsActive}>Americano</NavLink></li>
              <li><NavLink to="/categories/4" className={setIsActive}>Stained</NavLink></li>
            </ul>
          </div>

          <Outlet />
          {/* Outlet это места, где будет загружаться все компоненты, которые находятся внутри */}
        </main>
      </div>
    </>
  );
}

export default Home;
