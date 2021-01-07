import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/index';
import CartDropdown from '../cart-dropdown/index';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from "../../assets/crown.svg";


const Header = ({ hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
