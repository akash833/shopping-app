import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../redux/slices/CartItemsSlice';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const API_URL = "https://fakestoreapi.com/products";

function Home() {
    const [products, setProducts] = useState([]);
    const cart = useSelector((state)=>state.cartItem);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    async function fetchProductData() {
        setLoading(true);
        const { data } = await axios.get(API_URL);
        setProducts(data);
        setLoading(false);
    }

    const addToMyCart = (item) => {
        dispatch((addToCart(item)));
        toast.success("Item added successfully");
    }

    const removeFormMyCart = (item) => {
        dispatch((removeToCart(item.id)));
        toast.success("Item removed successfully");
    }

    useEffect(() => {
        fetchProductData();
    },[])
    return (
        <div className='w-full'>
            <Toaster />
            <div className='w-[64%] mx-auto flex flex-wrap gap-4 p-2 py-8'>
                {!loading ?
                    (products.map((product) => (
                        <div key={product.id} className='shadow-lg rounded-lg w-56 p-2 hover:scale-105'>
                            <div className='truncate'>{product.title}</div>
                            <div className='text-sm text-gray-500 truncate ...'>{product.description}</div>
                            <div className='my-8 flex justify-center'>
                                <img src={product.image} className='w-[70%] h-48' />
                            </div>
                            <div className='w-full flex justify-between px-2'>
                                <div className='text-green-800'>Price</div>
                                { 
                                    cart.some((item)=> item.id===product.id) ?
                                    <button onClick={() => removeFormMyCart(product)} className='border border-slate-400 rounded-md text-sm px-2 py-1'>Remove</button> :
                                    <button onClick={() => addToMyCart(product)} className='border border-slate-400 rounded-md text-sm px-2 py-1'>Add to Cart</button>
                                }
                            </div>
                        </div>
                    ))) :
                    (<div className='flex w-full justify-center items-center h-screen'><span className='loader'></span></div>)
                }
            </div>
        </div>
    )
}

export default Home;