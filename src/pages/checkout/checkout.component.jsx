import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selection';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <Fragment>
        <main className='checkout-page'>
            <section className='checkout-header'>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </section>
            <section className="checkout-section">
                {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
}
            </section>

            <section className="total">
                <span>TOTAL: ${total}</span>
            </section>
            <section>
                <p className="test-warning">*Please use the test card information for payment:
                    <br/>
                    CARD: 4242 4242 4242 4242 EXP: 01/20 CVV: 123</p>
                <StripeCheckoutButton price={total}/>
            </section>
        </main>
    </Fragment>
)

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems, total: selectCartTotal})

export default connect(mapStateToProps)(CheckoutPage);