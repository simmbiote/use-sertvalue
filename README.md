# use-setvalue

A simple React hook to use state in a component cleanly with less boilerplate.

## Example usages
 
**Example 1**
Simplest way to set the value of a field in your state: 

> const [state, setValue] = useSetValue(initialState);

	const SimpleComponent = () => {
	  const initialState = {
	    errors: {},
	    isLoading: false, 
	    name: "",  
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

**Example 2**
Using a dispatch method with the default reducer:
> const [state, setValue, dispatch] = useSetValue(initialState);

	const ComponentWithDispatch = () => {
	  const initialState = {
	    errors: {},
	    isLoading: false,
	    name: "",
	    didConsent: false,
	  };

	  const [state, setValue, dispatch] = useSetValue(initialState);

	  return (
	    <form>
	      {state.isLoading && "Loading..."}
	      <input
	        type="checkbox"
	        name="consent"
	        checked={state.didConsent}
	        onChange={() => dispatch({ type: "TOGGLE CONSENT" })}
	      />
	    </form>
	  );
	};
  
**Example 3**
Using a dispatch method with the a custom reducer:
> const [state, setValue, dispatch] = useSetValue(initialState, myReducer);

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

	  const [state, setValue, dispatch] = useSetValue(initialState, myReducer);

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