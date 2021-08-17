const React = require("react");
const defaultReducer = require("./defaultReducer");

const useSetValue = (initialState, reducer = defaultReducer) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // const [none, setState] = useState(initialState);

  //   In most cases, just use setValue when you want to set the value of a field.
  const setValue = (field, payload) => {
    dispatch({
      field,
      payload,
    });
  };

  //   In some cases, you might want to use
  //   dispatch({ type: "SOME_DISPATCH_TYPE", field: "field", value: "some value"})

  return [state, setValue, dispatch];
};

module.exports = useSetValue;
