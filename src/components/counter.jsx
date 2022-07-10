import React from "react";
import { createStore } from "redux";


const Counter = () => {


// ====================================

function counterReducer(state = { value: 0 }, action) {

 if (typeof state === "undefined") {
   state = 0; 
 }

  switch (action.type) {
    case "incremented":
      return { ...state, value: state.value + 1 };
    case "decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}


let store = createStore(counterReducer);

// ======================================================


const render = () => {
  const storeValue = store.getState().value;
  document.querySelector(".counter span").innerHTML = storeValue
}
store.subscribe(render);


// ============================================= 

  return (
    <div className="container">
      <div className="counter ">
        <button
          type="button"
          className="btn btn--success "
          onClick={() => (
            store.dispatch({ type: "decremented" })
          )}
        >
          -
        </button>
        <span>{store.getState().value}</span>
        <button
          type="button"
          className="btn btn--success"
          onClick={() => (
            store.dispatch({ type: "incremented" })
          )}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
