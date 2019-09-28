import React, {Fragment} from 'react';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selection';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden}) => (
    <Fragment>
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo/>
            </LogoContainer>
            <OptionsContainer>

                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {currentUser
                    ? (
                        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    )
                    : (
                        <OptionLink to="/signin">SIGN IN</OptionLink>
                    )
}
                <CartIcon/>
            </OptionsContainer>
            {hidden
                ? null
                : <CartDropdown/>
}

        </HeaderContainer>
    </Fragment>
);

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser, hidden: selectCartHidden})

export default connect(mapStateToProps)(Header);