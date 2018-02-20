export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(q=> q.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const indexToUp = state.findIndex(q => q.id === action.quoteId)
      state[indexToUp]["votes"] +=1
      return state
    case 'DOWNVOTE_QUOTE':
      const indexToDown = state.findIndex(q => q.id === action.quoteId)
      if (state[indexToDown]["votes"]> 0){state[indexToDown]["votes"] -=1}
      return state
    default: return state
  }
}
