import {
  sdk
} from "/build/_shared/chunk-AYBHDJL7.js";
import {
  lib_default
} from "/build/_shared/chunk-EW2ICRB6.js";
import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";

// app/providers/checkout/checkout.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/providers/checkout/checkout.ts"
  );
  import.meta.hot.lastModified = "1745508918460.1826";
}
function addPaymentToOrder(input, options) {
  return sdk.addPaymentToOrder({ input }, options);
}
lib_default`
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
`;
lib_default`
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
`;
lib_default`
  query nextOrderStates {
    nextOrderStates
  }
`;
lib_default`
  query availableCountries {
    availableCountries {
      id
      name
      code
    }
  }
`;
lib_default`
  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
lib_default`
  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
lib_default`
  mutation createStripePaymentIntent {
    createStripePaymentIntent
  }
`;
lib_default`
  query generateBraintreeClientToken {
    generateBraintreeClientToken
  }
`;

export {
  addPaymentToOrder
};
//# sourceMappingURL=/build/_shared/chunk-G6LEXIC6.js.map
