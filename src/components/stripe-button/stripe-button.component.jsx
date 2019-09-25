import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_OMmi9J56IBsmVVodWpMoBNRp00MSWiI8Hd';

    const onToken = token => {
        alert("Your payment is successful!");
        console.log(token);
    }

    return (<StripeCheckout
        label="Pay Now"
        name="Crown Clothing"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total payment is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}/>)
}

export default StripeCheckoutButton;