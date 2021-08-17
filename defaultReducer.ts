/*
errors must always be an object. errors: {}
*/

const defaultReducer = (state, action) => {
  const { type, field, payload } = action;

  switch (type) {
    case "TOGGLE CONSENT":
      return {
        ...state,
        didConsent: !state.didConsent,
      };

    default:
      if (field) {
        // Clear error messages, unless you're setting them.
        if (state.errors !== undefined && field !== "errors") {
          return {
            ...state,
            errors: {},
            [field]: payload,
          };
        }

        // if setting an error, automatically set isLoading to false.
        if ((field === "error" || field === "errors") && state.isLoading) {
          return {
            ...state,
            [field]: payload,
            isLoading: false,
          };
        }

        return {
          ...state,
          [field]: payload,
        };
      }
      return state;
  }
};

export default defaultReducer;
