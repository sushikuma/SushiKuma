import React, { useEffect, useState } from 'react';
import './Cart.css';
import { ReactComponent as Note } from './notes.svg';

const Cart = () => {
    const [isClicked, setIsClicked] = useState(false);

    function clickHandler () {
        if (isClicked == false) setIsClicked(true);
        else setIsClicked(false);
        

    }

    return (
        <>
            <button id="noteBtn" className={isClicked? 'active':null} onClick={clickHandler}>
                <Note className="Note" fill="#ddd" height="40" width="40" />
            </button>

            <div id="cart-content" className={isClicked? 'active':null}>
            </div>
        </>
    );
}

export default Cart;