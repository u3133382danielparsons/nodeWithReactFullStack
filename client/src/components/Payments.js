import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Family Seeker Donations"
        description="$5"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn right" style={{ margin: '8px' }}>
          Donations
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
