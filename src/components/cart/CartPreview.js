import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
    IoCartOutline
} from 'react-icons/io5';
import { useSelector } from 'react-redux';

const CartPreview = () => {

    const [totalQuantity, settotalQuantity] = useState(0)
    const { total } = useSelector(state => state.cart)

    useEffect(() => {
        settotalQuantity(total)
    }, [total])


    return (
        <div class='cart-preview' >
            <Link to="/cart" >
                <IoCartOutline style={{ marginRight: "20px" }} size={30} />
            </Link>
            {totalQuantity > 0 ? <div id='quantity' >{totalQuantity}</div> : null}
        </div>
    );
}

export default CartPreview;