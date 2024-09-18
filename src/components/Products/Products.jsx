import React, { useEffect } from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addProductToCart, getProductAll, getProductById, getSearchedProduct } from '../../store/actions/product';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products); // Отфильтрованные продукты из состояния
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            dispatch(getProductById(categoryId));
        } else {
            dispatch(getProductAll());
        }
    }, [categoryId, dispatch]);

    return (
        <div className="products">
            {products && products.length > 0 ? (
                products.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.image} alt={item.title} className="item__image" />

                        <div className='item__content'>
                            <h2 className='item__title'>
                                <Link to={`/product/${item.id}`}>{item.title}</Link>
                            </h2>
                            <p className='item__subtitle'>{item.description}</p>
                        </div>

                        <div className='item__footer'>
                            <span className='item__price'>$ {item.price}</span>
                            <button className='btn btn-small' onClick={() => dispatch(addProductToCart(item.id))}>
                                <CiShoppingBasket className='btn-icon' />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default Products;
