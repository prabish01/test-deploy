import{a as t}from"/build/_shared/chunk-MKACSLI7.js";import{b as e}from"/build/_shared/chunk-VEH472QX.js";function s(r,n){return t.addPaymentToOrder({input:r},n)}e`
  query eligibleShippingMethods {
    eligibleShippingMethods {
      id
      name
      description
      metadata
      price
      priceWithTax
    }
  }
`;e`
  query eligiblePaymentMethods {
    eligiblePaymentMethods {
      id
      code
      name
      description
      eligibilityMessage
      isEligible
    }
  }
`;e`
  query nextOrderStates {
    nextOrderStates
  }
`;e`
  query availableCountries {
    availableCountries {
      id
      name
      code
    }
  }
`;e`
  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;e`
  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;e`
  mutation createStripePaymentIntent {
    createStripePaymentIntent
  }
`;e`
  query generateBraintreeClientToken {
    generateBraintreeClientToken
  }
`;export{s as a};
