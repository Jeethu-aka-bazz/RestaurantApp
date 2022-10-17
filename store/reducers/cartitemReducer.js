let lastId = 0;

export default function cartitemsReducer(state = [], action) {
  if (action.type === 'addItem') {
    return [
      ...state,
      {
        id: ++lastId,
        item: action.payload,
      },
    ];
  }
  return state;
}
