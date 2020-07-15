import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_518lo73DEdrTPw0W16YbXVsFKIGPlZGDHR35p2D1cbk8uhQW5D0ykkAovgBPUf5ZTuh5ceeiKLTe60EsLcdXA9TZO00cdQ7MAJs'

    const onToken = token => {
        console.log(token);
    }
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'Stuffin Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;