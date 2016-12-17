function polls(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_VOTES' :
      console.log("Incrementing VOTES!!");
      const i = action.index;
      const j = action.optionIndex;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], options: [
            ...state[i].options.slice(0, j),
            {...state[i].options[j], votes: state[i].options[j].votes + 1 },
            ...state[i].options.slice(j + 1),
          ]
        },
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default polls;
