# use-setvalue

A simple React hook to using state in a component cleanly.

## Example usages

Using a dispatch method:

`
const EasyComponent = () => {
  const initialState = {
    errors: {},
    isLoading: false,
    text: "",
    name: "",
    email: "",
    didConsent: false,
  };

  const [state, setValue] = useSetValue(initialState);

  return (
    <form>
      {state.isLoading && "Loading..."}

      <input
        type="text"
        value={state.name}
        onChange={(e) => setValue("name", e.target.value)}
      />

    </form>
  );
};
`

Using a dispatch method with the default reducer:

`
const ComponentWithDispatch = () => {
  const initialState = {
    errors: {},
    isLoading: false,
    text: "",
    name: "",
    email: "",
    didConsent: false,
  };

  const [state, setValue, dispatch] = useSetValue(initialState);

  return (
    <form>
      {state.isLoading && "Loading..."}

      {/* Simplest method - use setValue function to change one value. */}
      <input
        type="text"
        value={state.name}
        onChange={(e) => setValue("name", e.target.value)}
      />

      {/* Option to use a dispatch function */}
      <input
        type="checkbox"
        name="consent"
        checked={state.didConsent}
        onChange={() => dispatch({ type: "TOGGLE CONSENT" })}
      />
    </form>
  );
};
`

Using a dispatch method with the a custom reducer:

`

const myReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    default: 
      return state
  }
}

const ComponentWithCustomReducer = () => {
  const initialState = {
    errors: {},
    isLoading: false,
    todos: [],
    todoText: "",
    didConsent: false,
  };

  const [state, setValue, dispatch] = useSetValue(initialState);

  return (
    <form>
      {state.isLoading && "Loading..."}

      <input
        type="text"
        placeholder="Type task name"
        value={state.todoText}
        onChange={(e) => setValue("todoText", e.target.value)}
        id="to-do-task"
      />

      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: state.todoText,
          })
        }
      >
        Add ToDo
      </button>
    </form>
  );
};
`
