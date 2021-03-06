import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}

export default HeaderCartButton
