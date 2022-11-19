export const POPUP_IS_OPEN = "POPUP_IS_OPEN";
export const POPUP_IS_CLOSE = "POPUP_IS_CLOSE";


const initialState = {
    IsOpen: false,
  };

  export const mainReduser = (state = initialState, action) => {
    switch (action.type) {
      case POPUP_IS_OPEN:
        return { ...state, IsOpen: !state.IsOpen  };
        default:
            return state;
        }
    }