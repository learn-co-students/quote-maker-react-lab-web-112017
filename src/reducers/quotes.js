export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      let newArr = state.filter(q => q.id !== action.quoteId)
      return newArr
    case 'UPVOTE_QUOTE':
      let uvState = state.map(q => {
        if (q.id === action.quoteId) {
          return {...q, votes: q.votes+1}
        }
        return q
      })
      return uvState
    case 'DOWNVOTE_QUOTE':
      let dvState = state.map(q => {
        if (q.id === action.quoteId && q.votes > 0) {
          return {...q, votes: q.votes-1}
        }
        return q
      })
      return dvState
    default:
      return state
  }
}
