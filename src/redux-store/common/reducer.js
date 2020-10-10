import { COMMON_ACTION } from './action';

const initialState = {
  notify: {
    successSnackbarOpen: false,
    errorSnackbarOpen: false,
    infoSnackbarOpen: false,
    successSnackbarMessage: 'success',
    notiType: COMMON_ACTION.SNACKBAR_SUCCESS,
  },
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMON_ACTION.SNACKBAR_SUCCESS:
      return {
        ...state,
        notify: {
          ...state.notify,
          successSnackbarOpen: true,
          successSnackbarMessage: action.message,
          notiType: action.notiType,
        },
      };
    case COMMON_ACTION.SNACKBAR_CLEAR:
      return {
        ...state,
        notify: {
          ...state.notify,
          successSnackbarOpen: false,
          errorSnackbarOpen: false,
          infoSnackbarOpen: false,
        },
      };
    default:
      return state;
  }
};
export default commonReducer;
