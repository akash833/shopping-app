import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart } from '../redux/slices/CartItemsSlice';
import toast, { Toaster } from 'react-hot-toast';

function Cart() {
    const cartItems = useSelector((state) => state.cartItem);
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(removeToCart(id));
        toast.success("Item removed successfully");
    }

    return (
        <div className='w-full'>
            <Toaster />
            {cartItems.length > 0 ? 
                <div className='w-[64%] mx-auto flex p-8'>
                <div className='w-[60%]'>
                    {
                        cartItems.map((item) => (
                            <div key={item.id} className='flex mb-10 border-b-2 border-black mr-2'>
                                <div className='w-[20%]'>
                                    <img src={item.image} />
                                </div>
                                <div className='w-[80%] p-4 pr-6'>
                                    <div className=''>{item.title}</div>
                                    <div className='text-sm text-gray-500'>{item.description}</div>
                                    <div className='mt-2 flex justify-between items-center'>
                                        <div className='text-green-800 font-semibold'>${item.price}</div>
                                        <button onClick={() => removeFromCart(item.id)} className='flex justify-center items-center bg-red-100 rounded-full w-7 h-7'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" className='fill-red-700'><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[40%]'>
                    <div className='text-sm text-green-700 uppercase'>your cart</div>
                    <div className='font-bold text-3xl text-green-700 uppercase'>summary</div>
                    <div className='mt-2'>Total Items : {cartItems.length}</div>
                    <div className='my-2 mb-8'>Total Amount : <span className='font-bold'>${totalAmount}</span></div>
                    <button className='w-full text-center py-2 bg-green-700 text-white rounded-lg'>Checkout Now</button>
                </div>
            </div> : 
            <div className='text-center mt-48 font-bold text-green-700'>
                Cart is Empty
            </div>
            }
            
        </div>
    )
}

export default Cart;