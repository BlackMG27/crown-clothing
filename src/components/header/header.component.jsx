import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    <Fragment>
        <header className="header">
            <Link to='/' className="logo-container">
                <Logo className="logo"/>
            </Link>
            <ul className="options">
                <li className="option">
                    <Link to='/shop'>
                        SHOP
                    </Link>
                </li>
                <li className="option">
                    <Link to="/shop">
                        CONTACT
                    </Link>
                </li>
                {currentUser
                    ? (
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    )
                    : (
                        <Link className="option" to="/signin">SIGN IN</Link>
                    )
}
                <CartIcon/>
            </ul>
            {hidden
                ? null
                : <CartDropdown/>
}

        </header>
    </Fragment>
);

const mapStateToProps = ({user: {
        currentUser
    }, cart: {
        hidden
    }}) => ({currentUser, hidden})

export default connect(mapStateToProps)(Header);