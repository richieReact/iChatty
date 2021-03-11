import createDataContext from './createDataContext'

const userReducer = (state, action) => {
  switch (action.type) {
    case 'set_username':
      return { ...state, username: action.payload }
    default:
      return state
  }
}

const editUsername = (dispatch) => (text) => {
  dispatch({ type: 'set_username', payload: text })
}

export const { Context, Provider } = createDataContext(
  userReducer,
  { editUsername },
  { username: 'Rebekah' }
)