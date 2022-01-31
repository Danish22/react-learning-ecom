import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51K1YZmSCC4Ya4fQ2qrql201Oq7k3nMHJFvZeiKVnkR3xWGEn0yR7VbE1oOWla0ZL9rhrCdsBAnUf5YAPKw04nHUS00J30c53hd';
    const onToken = token => {
        console.log(token);
        alert('Payment Ok');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;