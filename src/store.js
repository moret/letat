import { createStore } from 'redux';

const initialState = {
  eulaOk: false,
  spamOk: true,
  liveEarth: true    
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'EULA_OK': {
      return Object.assign({}, state, { eulaOk: !state.eulaOk });
    }
    case 'SPAM_OK': {
      return Object.assign({}, state, { spamOk: !state.spamOk });
    }
    case 'DOOM': {
      if (state.eulaOk) {
        return Object.assign({}, state, { liveEarth: false });
      }
      return state;
    }
    default: {
      return state;
    }
  }
}

export const storeActions = {
  eulaOk: () => ({ type: 'EULA_OK' }),
  spamOk: () => ({ type: 'SPAM_OK' }),
  doom: () => ({ type: 'DOOM' })
};

export default createStore(reducer);
