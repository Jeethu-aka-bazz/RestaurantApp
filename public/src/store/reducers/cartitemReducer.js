let lastId = 0;

export default function cartitemsReducer(state = [], action) {
  if (action.type === 'addItem') {
    return [
      ...state,
      {
        id: ++lastId,
        ...action.payload,
      },
    ];
  } else if (action.type === 'updateItem') {
    state.splice(action.indexOfRepeateditem, 1, {
      ...state[action.indexOfRepeateditem],
      quantity: state[action.indexOfRepeateditem].quantity + 1,
    });
  } else if (action.type === 'reduceItem') {
    state.splice(action.indexOfRepeateditem, 1, {
      ...state[action.indexOfRepeateditem],
      quantity: state[action.indexOfRepeateditem].quantity - 1,
    });
  } else if (action.type === 'removeItem') {
    state.splice(action.indexOfRepeateditem, 1);
  }

  return state;
}
