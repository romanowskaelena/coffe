import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getSingleProduct } from '../../store/actions/product';
import { CiShoppingBasket } from 'react-icons/ci';

const ProductSingle = () => {
    const dispatch = useDispatch()

    const productSingle = useSelector(state => state.products);

    const { productId } = useParams()

    useEffect( () => {
        dispatch(getSingleProduct(productId));
    },[productId])

    return (
        <>
        <div>ProductSingle {productId}</div>

        <div className="products">
        {
            productSingle && productSingle.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.image} alt={item.title} className="item__image" />

                    <div className='item__content'>
                        <h2 className='item__title'>{item.title}</h2>
                        <p className='item__subtitle'>{item.description}</p>
                    </div>

                    <div className='item__footer'>
                        <span className='item__price'>$ {item.price}</span>

                        <button className='btn btn-small' onClick={ () => dispatch(addProductToCart(item.id))}><CiShoppingBasket className='btn-icon' /></button>
                    </div>
                </div>
            ))
        }
    </div>
    </>
    )
}

export default ProductSingle