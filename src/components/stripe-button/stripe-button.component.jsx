import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51MBl4bEAumVMvxDtb3OY0lOkEZ8hUUB5TZFxkY7uOMzTN0amfM6GGxkUzPMG2LfXwQ8x2ZZcGAq2pwGnXvWdecsE00G0PT8LB5';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/Cuc.svg"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;